
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import GlossaryTermCard from "./GlossaryTermCard";
import { GlossaryTerm } from "../glossaryData";

interface GlossaryListProps {
  terms: GlossaryTerm[];
}

const GlossaryList: React.FC<GlossaryListProps> = ({ terms }) => {
  if (terms.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No terms found matching your criteria.
      </div>
    );
  }

  return (
    <ScrollArea className="h-[600px]">
      <div className="space-y-4">
        {terms.map((term, index) => (
          <GlossaryTermCard key={`${term.term}-${index}`} term={term} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default GlossaryList;
