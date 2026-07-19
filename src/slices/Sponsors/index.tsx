import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Sponsors`.
 */
export type SponsorsProps = SliceComponentProps<Content.SponsorsSlice>;

/**
 * Component for "Sponsors" Slices.
 */
const Sponsors = ({ slice }: SponsorsProps): JSX.Element => {
  return (
    <section
      className={cn("min-h-screen py-12 bg-lightGray")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-deepBlue mb-12 text-center">
          {slice.primary.title}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {slice.primary.sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center bg-white p-6 rounded-lg shadow-md">
              {sponsor.sponsor_logo.url && (
                <PrismicNextImage field={sponsor.sponsor_logo} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
