import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `WhyChooseUs`.
 */
export type WhyChooseUsProps = SliceComponentProps<Content.WhyChooseUsSlice>;

/**
 * Component for "WhyChooseUs" Slices.
 */
const WhyChooseUs = ({ slice }: WhyChooseUsProps): JSX.Element => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slice.primary.reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-deepBlue mb-4">
                {reason.reason_title}
              </h3>
              <PrismicRichText field={reason.reason_description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
