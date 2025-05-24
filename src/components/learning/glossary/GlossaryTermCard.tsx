
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlossaryTerm } from "../glossaryData";

interface GlossaryTermCardProps {
  term: GlossaryTerm;
}

const GlossaryTermCard: React.FC<GlossaryTermCardProps> = ({ term }) => {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{term.term}</h3>
          <Badge variant="secondary" className="ml-2">
            {term.category}
          </Badge>
        </div>
        <p className="text-gray-700 leading-relaxed">{term.definition}</p>
      </CardContent>
    </Card>
  );
};

export default GlossaryTermCard;
