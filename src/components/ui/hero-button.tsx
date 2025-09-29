import * as React from "react";

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export type HeroButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "white";
  size?: "sm" | "md" | "lg";
};

const base =
  "inline-flex items-center justify-center rounded-md font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<HeroButtonProps["variant"]>, string> = {
  primary: "bg-foreground text-background hover:opacity-90",
  secondary: "bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20",
  white: "bg-white text-blue-600 hover:bg-gray-100 border border-blue-600",
};

const sizes: Record<NonNullable<HeroButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-11 px-6 text-lg",
};

export const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant = "white", size = "md", ...props }, ref) => (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  ),
);
HeroButton.displayName = "HeroButton";
