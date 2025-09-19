import * as React from "react"
import { cn } from "@/lib/utils"
import { formatTimeAgo } from "@/lib/utils"

interface ScoreWidgetProps {
  score: number;
  label?: string;
  timestamp?: string;
  className?: string;
}

const ScoreWidget: React.FC<ScoreWidgetProps> = ({
  score,
  label = "Confidence Score",
  timestamp,
  className
}) => {
  return (
    <div className={cn(
      "relative flex items-center justify-between pl-2 pr-2 border border-gray-400 mr-0 md:mr-2 h-[40px] md:h-[52px] mt-2 md:mt-0",
      className
    )}>
      <div
        className="absolute top-0 left-0 h-full bg-[#D3FF4E]"
        style={{ width: `${score}%` }}
      />
      <div className="relative z-[1]">
        <p className="font-medium text-[13px] w-full text-left leading-5 gray-600">{label}</p>
        {timestamp && (
          <p className="text-[12px] w-full text-left font-thin leading-4">
            Scanned: {formatTimeAgo(timestamp)}
          </p>
        )}
      </div>
      <div className="relative z-[1]">
        <div className="text-2xl md:[font-size:1.65rem] font-bold font-sans">{score}%</div>
      </div>
    </div>
  )
}

export { ScoreWidget }