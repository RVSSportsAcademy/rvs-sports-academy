"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-secondary",

        secondary:
          "border border-primary bg-white text-primary hover:bg-primary hover:text-white",

        basketballOrange:
          "bg-basketballOrange text-white hover:opacity-90",

        deepBlue:
          "bg-deepBlue text-white hover:opacity-90",

        white:
          "bg-white text-black hover:bg-neutralGray",
      },

      size: {
        small: "px-3 py-2 text-sm",
        medium: "px-5 py-3 text-base",
        large: "px-7 py-4 text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export default Button;