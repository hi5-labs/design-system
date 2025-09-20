import * as React from "react"
import { cn } from "../../../lib/utils"

type HeadingProps = React.HTMLAttributes<HTMLElement>

export function H1({ className, ...props }: HeadingProps) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-heading mb-2", className)} {...props} />
  )
}

export function H2({ className, ...props }: HeadingProps) {
  return (
    <h2 className={cn("scroll-m-20 text-3xl font-heading mb-2", className)} {...props} />
  )
}

export function H3({ className, ...props }: HeadingProps) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-heading mb-2 tracking-tight", className)} {...props} />
  )
}

export function H4({ className, ...props }: HeadingProps) {
  return (
    <h4 className={cn("scroll-m-20 text-xl mb-2 tracking-tight", className)} {...props} />
  )
}

export function H5({ className, ...props }: HeadingProps) {
  return (
    <h5 className={cn("scroll-m-20 text-lg mb-2 tracking-tight", className)} {...props} />
  )
}

export function H6({ className, ...props }: HeadingProps) {
  return (
    <h6 className={cn("scroll-m-20 text-base mb-2 tracking-tight", className)} {...props} />
  )
}
