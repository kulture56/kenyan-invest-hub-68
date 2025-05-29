
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface GlossaryTerm {
  letter: string;
  term: string;
  definition: string;
  category: string;
}

interface GlossaryTabProps {
  glossaryTerms: GlossaryTerm[];
}

const GlossaryTab: React.FC<GlossaryTabProps> = ({ glossaryTerms }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredTerms = glossaryTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const letter = term.letter.toUpperCase();
    if (!acc[letter]) {
      acc[letter] = [];
    }
    acc[letter].push(term);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);

  const handleAskRafiki = (term: string, definition: string) => {
    const question = `Can you explain more about "${term}" and how it applies to Kenyan financial markets?`;
    navigate("/rafiki", { 
      state: { suggestedQuestion: question }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search financial terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Badge variant="secondary">
          {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''}
        </Badge>
      </div>

      <div className="space-y-6">
        {Object.keys(groupedTerms)
          .sort()
          .map((letter) => (
            <div key={letter} className="space-y-3">
              <h3 className="text-lg font-semibold text-primary border-b pb-2">
                {letter}
              </h3>
              <div className="grid gap-3">
                {groupedTerms[letter].map((term, index) => (
                  <Card key={`${letter}-${index}`} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-base">{term.term}</CardTitle>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {term.category}
                          </Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleAskRafiki(term.term, term.definition)}
                          className="flex items-center gap-1 text-primary hover:text-primary/80"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Ask Rafiki
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm leading-relaxed">
                        {term.definition}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No terms found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default GlossaryTab;
