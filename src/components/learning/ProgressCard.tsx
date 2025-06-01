
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, CheckCircle2, BookOpen, Trophy } from "lucide-react";

interface ProgressCardProps {
  completedModules: number;
  totalModules: number;
  quizzesCompleted: number;
  badgesEarned: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  completedModules,
  totalModules,
  quizzesCompleted,
  badgesEarned
}) => {
  const progressPercentage = Math.round((completedModules / totalModules) * 100);

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <BookOpen className="h-5 w-5" />
          Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-blue-700">Modules Completed</span>
            <span className="text-sm text-blue-600">{completedModules}/{totalModules}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
          <p className="text-xs text-blue-600">{progressPercentage}% complete</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-3 border border-blue-100">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-xs font-medium text-gray-600">Quizzes</span>
            </div>
            <p className="text-lg font-bold text-gray-800">{quizzesCompleted}</p>
            <p className="text-xs text-gray-500">Completed</p>
          </div>
          
          <div className="bg-white rounded-lg p-3 border border-blue-100">
            <div className="flex items-center gap-2 mb-1">
              <Award className="h-4 w-4 text-yellow-600" />
              <span className="text-xs font-medium text-gray-600">Badges</span>
            </div>
            <p className="text-lg font-bold text-gray-800">{badgesEarned}</p>
            <p className="text-xs text-gray-500">Earned</p>
          </div>
        </div>

        {/* Achievement Badge */}
        {progressPercentage >= 50 && (
          <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-lg p-2">
            <Trophy className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-800">
              Halfway Hero!
            </span>
          </div>
        )}

        {progressPercentage === 100 && (
          <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg p-2">
            <Trophy className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">
              Course Master!
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
