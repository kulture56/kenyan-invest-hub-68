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
const DailyQuestions: React.FC<DailyQuestionsProps> = ({
  questions
}) => {
  return <div className="space-y-2">
      
      
    </div>;
};
export default DailyQuestions;