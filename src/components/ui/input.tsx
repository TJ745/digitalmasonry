import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 transition-all duration-200",
          "focus:outline-none focus:border-indigo-500/60 focus:bg-white/7 focus:ring-2 focus:ring-indigo-500/20",
          "hover:border-white/20",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "autofill:bg-zinc-900",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
