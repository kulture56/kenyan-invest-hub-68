
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PollOptionsProps {
  pollOptions: string[];
  onUpdateOption: (index: number, value: string) => void;
  onRemoveOption: (index: number) => void;
}

export const PollOptions: React.FC<PollOptionsProps> = ({
  pollOptions,
  onUpdateOption,
  onRemoveOption
}) => {
  return (
    <div className="space-y-2">
      <h4 className="font-medium">Poll Options:</h4>
      {pollOptions.map((option, index) => (
        <div key={index} className="flex items-center gap-2">
          <Input
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => onUpdateOption(index, e.target.value)}
            className="flex-1"
          />
          {pollOptions.length > 2 && (
            <Button variant="ghost" size="sm" onClick={() => onRemoveOption(index)}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};
