import { cn } from "@/libs/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-surface p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
