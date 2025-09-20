import * as React from "react"

import { cn } from "../../../lib/utils"

const ContentSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-[calc(100%+2rem)] md:w-[calc(100%+1rem)] md:w-full m-[0_-1rem] md:mx-auto  rounded-lg bg-white shadow p-4 md:p-6 border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 sm:flex-row sm:items-center shadow-sm",
      className
    )}
    {...props}
  />
))
ContentSection.displayName = "ContentSection"

export { ContentSection }
