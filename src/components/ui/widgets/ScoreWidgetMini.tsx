import React from 'react';
import { Progress } from '@/components/ui/feedback/Progress';

interface ScoreWidgetMiniProps {
  score: number;
  className?: string;
}

export const ScoreWidgetMini: React.FC<ScoreWidgetMiniProps> = ({ score, className = '' }) => {
  return (
    <div>
      <div className="text-md font-medium text-right" style={{ fontFamily: 'Montserrat, sans-serif' }}>{Math.round(score * 100)}%</div>
      <Progress value={Math.round(score * 100)} className="w-[100px]" />
    </div>
  );
}; 