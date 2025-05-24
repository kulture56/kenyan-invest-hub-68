
import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GlossarySearch from "./glossary/GlossarySearch";
import CategoryFilter from "./glossary/CategoryFilter";
import AlphabetNavigation from "./glossary/AlphabetNavigation";
import GlossaryList from "./glossary/GlossaryList";
import { glossaryTerms, GlossaryTerm } from "./glossaryData";

const GlossaryTab: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLetter, setSelectedLetter] = useState("All");

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(glossaryTerms.map(term => term.category)));
    return uniqueCategories.sort();
  }, []);

  // Get available letters
  const availableLetters = useMemo(() => {
    return Array.from(new Set(glossaryTerms.map(term => term.letter))).sort();
  }, []);

  // Filter terms based on search, category, and letter
  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || term.category === selectedCategory;
      const matchesLetter = selectedLetter === "All" || term.letter === selectedLetter;
      
      return matchesSearch && matchesCategory && matchesLetter;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [searchTerm, selectedCategory, selectedLetter]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Glossary</CardTitle>
        <p className="text-sm text-gray-600">
          Comprehensive dictionary of financial and investment terms
        </p>
      </CardHeader>
      <CardContent>
        <GlossarySearch 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <AlphabetNavigation
          availableLetters={availableLetters}
          selectedLetter={selectedLetter}
          onLetterChange={setSelectedLetter}
        />
        
        <GlossaryList terms={filteredTerms} />
      </CardContent>
    </Card>
  );
};

export default GlossaryTab;
