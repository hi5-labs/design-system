import * as React from "react"
import { cn } from "../../../lib/utils"

type TextProps = React.HTMLAttributes<HTMLElement>

export function P({ className, ...props }: TextProps) {
  return (
    <p className={cn("leading-7 font-sans [&:not(:first-child)]:mt-3", className)} {...props} />
  )
}

export function Span({ className, ...props }: TextProps) {
  return (
    <span className={cn("font-sans", className)} {...props} />
  )
}

export function Blockquote({ className, ...props }: TextProps) {
  return (
    <blockquote className={cn("mt-6 font-sans border-l-2 pl-6 italic text-muted-foreground", className)} {...props} />
  )
}

export function InlineCode({ className, ...props }: TextProps) {
  return (
    <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", className)} {...props} />
  )
}

export function Lead({ className, ...props }: TextProps) {
  return (
    <p className={cn("text-xl font-sans text-muted-foreground", className)} {...props} />
  )
}

export function Large({ className, ...props }: TextProps) {
  return (
    <div className={cn("text-lg font-sans font-semibold", className)} {...props} />
  )
}

export function Muted({ className, ...props }: TextProps) {
  return (
    <p className={cn("text-sm font-sans text-muted-foreground", className)} {...props} />
  )
}

export function Small({ className, ...props }: TextProps) {
  return (
    <small className={cn("text-sm font-sans leading-none", className)} {...props} />
  )
}

export function List({ className, ...props }: TextProps) {
  return (
    <ul className={cn("my-6 ml-6 font-sans list-disc [&>li]:mt-2", className)} {...props} />
  )
}

export function ListItem({ className, ...props }: TextProps) {
  return (
    <li className={cn("mt-2 font-sans", className)} {...props} />
  )
}
