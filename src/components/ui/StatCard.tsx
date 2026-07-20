import { ReactNode } from "react";
import { cn } from "@/libs/utils";

interface StatCardProps {
  number: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export default function StatCard({
  number,
  label,
  icon,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "group rounded-3xl border border-border bg-surface p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-hover",
        className
      )}
    >
      {icon && (
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            {icon}
          </div>
        </div>
      )}

      <h3 className="text-4xl font-extrabold text-primary md:text-5xl">
        {number}
      </h3>

      <p className="mt-3 text-base font-medium text-body">
        {label}
      </p>
    </div>
  );
}