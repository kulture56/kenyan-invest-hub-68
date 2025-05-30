
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Users, Hash } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SearchResult {
  id: string;
  type: 'post' | 'user' | 'topic';
  title: string;
  subtitle?: string;
  avatar?: string;
  verified?: boolean;
  institution?: string;
}

const mockSearchResults: SearchResult[] = [
  {
    id: "1",
    type: "user",
    title: "Investment Pro",
    subtitle: "@investpro • Goldman Sachs",
    avatar: "/placeholder.svg",
    verified: true,
    institution: "Goldman Sachs"
  },
  {
    id: "2",
    type: "topic",
    title: "Technology Investments",
    subtitle: "245 posts this week"
  },
  {
    id: "3",
    type: "post",
    title: "Why tech stocks are undervalued right now",
    subtitle: "by Investment Pro • 2h ago"
  }
];

export const NavbarSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        const filtered = mockSearchResults.filter(result =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          (result.subtitle && result.subtitle.toLowerCase().includes(query.toLowerCase()))
        );
        setResults(filtered);
        setIsLoading(false);
        setIsOpen(true);
      }, 300);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    setIsOpen(false);
    setQuery("");
    
    switch (result.type) {
      case 'user':
        navigate(`/profile/${result.title.toLowerCase().replace(' ', '-')}`);
        break;
      case 'topic':
        navigate(`/topics/${result.title.toLowerCase().replace(/\s+/g, '-')}`);
        break;
      case 'post':
        navigate(`/posts/${result.id}`);
        break;
    }
  };

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'user': return <Users className="h-4 w-4 text-blue-500" />;
      case 'topic': return <Hash className="h-4 w-4 text-green-500" />;
      case 'post': return <TrendingUp className="h-4 w-4 text-purple-500" />;
      default: return <Search className="h-4 w-4" />;
    }
  };

  return (
    <div ref={searchRef} className="relative max-w-sm w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input 
        placeholder="Search topics, posts, or users..." 
        className="pl-10 bg-secondary/50 border-secondary focus:bg-background transition-colors h-9" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query.length > 2 && setIsOpen(true)}
      />
      
      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 shadow-lg border">
          <CardContent className="p-0 max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="p-4 text-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto"></div>
                <p className="text-sm text-muted-foreground mt-2">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="divide-y divide-border/50">
                {results.map((result) => (
                  <div
                    key={result.id}
                    className="p-3 hover:bg-muted/50 cursor-pointer transition-colors"
                    onClick={() => handleResultClick(result)}
                  >
                    <div className="flex items-center gap-3">
                      {result.type === 'user' && result.avatar ? (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={result.avatar} />
                          <AvatarFallback>{result.title.charAt(0)}</AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                          {getResultIcon(result.type)}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-sm truncate">{result.title}</p>
                          {result.verified && (
                            <img
                              src="/lovable-uploads/b2c13d6d-567c-4899-b94a-dfc01e705c0e.png"
                              alt="Verified"
                              className="w-4 h-4"
                            />
                          )}
                          <Badge variant="secondary" className="text-xs">
                            {result.type}
                          </Badge>
                        </div>
                        {result.subtitle && (
                          <p className="text-xs text-muted-foreground truncate">{result.subtitle}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : query.length > 2 ? (
              <div className="p-4 text-center">
                <Search className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">No results found for "{query}"</p>
              </div>
            ) : null}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
