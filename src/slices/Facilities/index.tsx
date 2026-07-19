import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Facilities`.
 */
export type FacilitiesProps = SliceComponentProps<Content.FacilitiesSlice>;

/**
 * Component for "Facilities" Slices.
 */
const Facilities = ({ slice }: FacilitiesProps): JSX.Element => {
  return (
    <section
      className={cn("min-h-screen py-12")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-deepBlue mb-12 text-center">
          {slice.primary.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slice.primary.facilities.map((facility, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              {facility.facility_image.url && (
                <PrismicNextImage field={facility.facility_image} />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-deepBlue mb-2">
                  {facility.facility_name}
                </h3>
                <PrismicRichText field={facility.facility_description} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
