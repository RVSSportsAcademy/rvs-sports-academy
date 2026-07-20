import { cn } from "@/libs/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}