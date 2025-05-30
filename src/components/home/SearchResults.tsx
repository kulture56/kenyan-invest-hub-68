
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FeedPostCard } from "./FeedPostCard";
import { Search } from "lucide-react";

interface SearchResultsProps {
  query: string;
  posts: any[];
  loading: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, posts, loading }) => {
  if (!query) return null;

  if (loading) {
    return (
      <Card className="mb-4">
        <CardContent className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <span className="ml-2 text-muted-foreground">Searching...</span>
        </CardContent>
      </Card>
    );
  }

  const filteredPosts = posts.filter(post => 
    post.content.toLowerCase().includes(query.toLowerCase()) ||
    post.author.name.toLowerCase().includes(query.toLowerCase()) ||
    post.topic.toLowerCase().includes(query.toLowerCase()) ||
    (post.author.institution && post.author.institution.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Search className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">
            Search results for "{query}"
          </h3>
          <span className="text-sm text-muted-foreground">
            ({filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'})
          </span>
        </div>
        
        {filteredPosts.length > 0 ? (
          <div className="space-y-1">
            {filteredPosts.map((post) => (
              <FeedPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h4 className="text-lg font-medium mb-2">No results found</h4>
            <p className="text-muted-foreground">
              Try searching with different keywords or check your spelling.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchResults;
