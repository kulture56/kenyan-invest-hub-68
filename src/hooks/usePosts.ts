
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface Post {
  id: string;
  user_id?: string;
  content: string;
  topic: string;
  timestamp: string;
  created_at: string;
  updated_at: string;
  likes: number;
  comments: number;
  shares: number;
  author_name?: string;
  author_username?: string;
  author_avatar?: string;
  image_url?: string;
  is_verified: boolean;
}

export const usePosts = (activeTab: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('posts-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'posts'
        },
        () => {
          fetchPosts();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [activeTab]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('posts')
        .select('*')
        .order('timestamp', { ascending: false });

      // Filter based on active tab
      if (activeTab !== 'for-you' && activeTab !== 'following') {
        // Map navigation tab to database topic
        const topicMap: { [key: string]: string } = {
          'stocks': 'Stocks',
          'securities': 'Securities',
          'funds': 'Funds',
          'saccos': 'Saccos',
          'insurance': 'Insurance',
          'real-estate': 'Real Estate',
          'technology': 'Technology',
          'biz': 'Biz',
          'entrepreneurship': 'Entrepreneurship',
          'trading': 'Trading',
          'market-analysis': 'Market Analysis',
          'news': 'News'
        };
        
        const dbTopic = topicMap[activeTab];
        if (dbTopic) {
          query = query.eq('topic', dbTopic);
        }
      }

      const { data, error } = await query;
      
      if (error) throw error;
      
      setPosts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { posts, loading, error, refetch: fetchPosts };
};
