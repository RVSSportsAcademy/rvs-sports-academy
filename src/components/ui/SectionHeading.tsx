import Badge from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {badge && <Badge>{badge}</Badge>}

      <h2 className="mt-6 text-4xl font-bold text-heading md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 text-lg leading-8 text-body">
          {description}
        </p>
      )}

      <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-accent" />
    </div>
  );
}