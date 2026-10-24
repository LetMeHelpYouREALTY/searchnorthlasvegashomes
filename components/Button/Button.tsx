import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-sm",
    "text-center",
    "border",
    "font-semibold",
    "uppercase",
    "tracking-[0.14em]",
    "transition-colors",
    "duration-200",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-navy-900", "border-navy-900", "text-white", "hover:bg-navy-700", "hover:border-navy-700"],
        secondary: ["bg-transparent", "border-gold-500", "text-navy-900", "hover:bg-gold-500", "hover:text-white"],
        gold: ["bg-gold-400", "border-gold-400", "text-navy-950", "hover:bg-gold-300", "hover:border-gold-300"],
      },
      size: {
        sm: ["min-w-20", "min-h-10", "text-xs", "py-2", "px-5"],
        lg: ["min-w-32", "min-h-12", "text-sm", "py-3", "px-8"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export interface ButtonProps extends VariantProps<typeof button> {
  underline?: boolean
  href?: string
  type?: "button" | "submit" | "reset"
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ className, intent, size, underline, href, type, children, ...props }: ButtonProps) {
  const buttonClasses = twMerge(button({ intent, size, className, underline }))
  
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button type={type || "button"} className={buttonClasses} {...props}>
      {children}
    </button>
  )
}
