import * as React from "react"

import { cn } from "@/lib/utils"

const HeaderSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mx-auto mb-8",
      className
    )}
    {...props}
  />
))
HeaderSection.displayName = "HeaderSection"

export { HeaderSection }
