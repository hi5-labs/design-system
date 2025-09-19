import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "border border-gray-900 rounded-md text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
  {
    variants: {
      size: {
        default: "h-[44px] pl-4 pr-4",
        sm: "h-10 pl-3 pr-3",
        lg: "h-14 pl-4 pr-4",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ size, className }))}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input, inputVariants }
