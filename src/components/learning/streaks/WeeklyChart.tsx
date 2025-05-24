
import React from "react";

interface WeeklyChartProps {
  weekDays: string[];
  weeklyPoints: number[];
}

const WeeklyChart: React.FC<WeeklyChartProps> = ({
  weekDays,
  weeklyPoints
}) => {
  return (
    <div>
      <h4 className="text-sm font-medium mb-2">This Week</h4>
      <div className="flex justify-between">
        {weekDays.map((day, index) => (
          <div key={day} className="flex flex-col items-center">
            <div className="text-xs text-muted-foreground">{day}</div>
            <div 
              className={`w-6 mt-1 rounded-sm ${weeklyPoints[index] > 0 ? 'bg-primary' : 'bg-muted'}`} 
              style={{
                height: `${Math.max(weeklyPoints[index] / 5, 4)}px`
              }}
            ></div>
            <div className="text-xs mt-1">{weeklyPoints[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyChart;
