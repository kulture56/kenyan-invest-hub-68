
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface GlossaryTerm {
  id?: string;
  letter?: string;
  term: string;
  definition: string;
  category: string;
}

interface GlossaryTabProps {
  glossaryTerms: GlossaryTerm[];
}

const GlossaryTab: React.FC<GlossaryTabProps> = ({ glossaryTerms }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(glossaryTerms.map(term => term.category)))];

  // Filter terms based on search and category
  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Group terms by first letter
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.letter || term.term.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);

  const handleAskRafiki = (term: GlossaryTerm) => {
    const question = `Can you explain more about ${term.term}? I want to understand: ${term.definition}`;
    navigate('/rafiki', { 
      state: { suggestedQuestion: question }
    });
  };

  console.log('Total glossary terms:', glossaryTerms.length);
  console.log('Filtered terms:', filteredTerms.length);
  console.log('Categories:', categories);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Financial Terms Glossary</CardTitle>
          <div className="space-y-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({glossaryTerms.filter(t => category === "All" || t.category === category).length})
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {Object.keys(groupedTerms)
            .sort()
            .map((letter) => (
              <div key={letter} className="space-y-2">
                <h3 className="text-lg font-semibold text-primary border-b pb-1">
                  {letter}
                </h3>
                <div className="space-y-3">
                  {groupedTerms[letter].map((term, index) => (
                    <div key={term.id || `${letter}-${index}`} className="border rounded-lg p-3 hover:bg-accent/50 transition-colors">
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-sm">{term.term}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {term.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {term.definition}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="shrink-0 gap-1"
                          onClick={() => handleAskRafiki(term)}
                        >
                          <MessageCircle className="h-3 w-3" />
                          Ask Rafiki About This
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          
          {filteredTerms.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>No terms found matching your search.</p>
              <p className="text-xs mt-1">Try adjusting your search terms or category filter.</p>
            </div>
          )}
          
          {glossaryTerms.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>Loading glossary terms...</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default GlossaryTab;
