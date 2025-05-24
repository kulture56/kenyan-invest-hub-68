
import React from "react";
import { Badge } from "@/components/ui/badge";

interface Question {
  id: number;
  text: string;
  completed: boolean;
}

interface DailyQuestionsProps {
  questions: Question[];
}

const DailyQuestions: React.FC<DailyQuestionsProps> = ({ questions }) => {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Daily Streak Questions (1 point each)</h4>
      <div className="space-y-2">
        {questions.map(question => (
          <div 
            key={question.id} 
            className={`p-2 rounded-md text-xs ${question.completed ? 'bg-green-500/10 text-green-700 border border-green-200' : 'bg-muted/50 text-muted-foreground border border-muted'}`}
          >
            <div className="flex items-start gap-2">
              {question.completed ? (
                <Badge className="bg-green-500 mt-0.5">Complete</Badge>
              ) : (
                <Badge variant="outline" className="mt-0.5">Pending</Badge>
              )}
              <span>{question.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyQuestions;
