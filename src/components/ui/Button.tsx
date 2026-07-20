import Link from "next/link";
import { cn } from "@/libs/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-primary text-white hover:bg-secondary shadow-card",
    secondary:
      "border border-primary bg-white text-primary hover:bg-primary hover:text-white",
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold transition-all duration-300",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}