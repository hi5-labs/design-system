import * as React from "react"
import { cn } from "../../../lib/utils"
import { formatTimeAgo } from "../../../lib/utils"

interface ScoreWidgetProps {
  score: number;
  label?: string;
  timestamp?: string;
  className?: string;
}

const ScoreWidget: React.FC<ScoreWidgetProps> = ({
  score,
  label,
  timestamp,
  className
}) => {
  return (
    <div
      className={cn(
        "bg-white relative flex items-center justify-between py-2 px-4 border border-gray-400",
        className
      )}
    >
      <div
        className="absolute inset-y-0 left-0 h-full bg-[#D3FF4E]"
        style={{ width: `${score}%` }}
      />
      <div className="relative z-10 text-left">
        <p className="hds mb-0 text-sm text-gray-900">{label}</p>
        {timestamp && (
          <p className="hds mb-0 text-sm text-gray-900">
            Scanned: {formatTimeAgo(timestamp)}
          </p>
        )}
      </div>
      <div className="relative z-10">
        <div className="hds mb-0 text-3xl font-sans font-bold text-gray-900">{score}%</div>
      </div>
    </div>
  )
}

export { ScoreWidget, type ScoreWidgetProps }