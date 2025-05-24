import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}
interface GlossaryTabProps {
  glossaryTerms: GlossaryTerm[];
}
const GlossaryTab: React.FC<GlossaryTabProps> = ({
  glossaryTerms
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTerms, setFilteredTerms] = useState(glossaryTerms);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim() === "") {
      setFilteredTerms(glossaryTerms);
    } else {
      const filtered = glossaryTerms.filter(item => item.term.toLowerCase().includes(term.toLowerCase()) || item.definition.toLowerCase().includes(term.toLowerCase()));
      setFilteredTerms(filtered);
    }
  };
  return <Card>
      <CardHeader>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search terms..." value={searchTerm} onChange={handleSearch} className="max-w-sm pl-10" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6">
            {filteredTerms.map((item, index) => {})}
            
            {filteredTerms.length === 0 && <div className="text-center py-8">
                <p className="text-muted-foreground">No matching terms found.</p>
              </div>}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>;
};
export default GlossaryTab;