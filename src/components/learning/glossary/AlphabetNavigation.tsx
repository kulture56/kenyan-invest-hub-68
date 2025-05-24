
import React from "react";
import { Button } from "@/components/ui/button";

interface AlphabetNavigationProps {
  availableLetters: string[];
  selectedLetter: string;
  onLetterChange: (letter: string) => void;
}

const AlphabetNavigation: React.FC<AlphabetNavigationProps> = ({ 
  availableLetters, 
  selectedLetter, 
  onLetterChange 
}) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="flex flex-wrap gap-1 mb-6">
      <Button
        variant={selectedLetter === "All" ? "default" : "outline"}
        size="sm"
        onClick={() => onLetterChange("All")}
      >
        All
      </Button>
      {alphabet.map((letter) => (
        <Button
          key={letter}
          variant={selectedLetter === letter ? "default" : "outline"}
          size="sm"
          onClick={() => onLetterChange(letter)}
          disabled={!availableLetters.includes(letter)}
          className={`w-8 h-8 p-0 ${!availableLetters.includes(letter) ? 'opacity-30' : ''}`}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};

export default AlphabetNavigation;
