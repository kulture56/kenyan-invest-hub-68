
export interface Post {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
    verified: boolean;
    institution?: string;
  };
  content: string;
  timestamp: string;
  created_at: string;
  updated_at: string;
  likes: number;
  comments: number;
  reposts: number;
  shares: number;
  bookmarks: number;
  topic: string;
  category: string;
  is_verified: boolean;
}
