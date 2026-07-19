import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Welcome`.
 */
export type WelcomeProps = SliceComponentProps<Content.WelcomeSlice>;

const Welcome = ({ slice }: WelcomeProps): JSX.Element => {
  return (
    <section
      className="bg-white py-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={cn(
          "container mx-auto px-6 lg:px-12",
          "grid lg:grid-cols-2 gap-14 items-center"
        )}
      >
        {/* Left Image */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <PrismicNextImage
              field={slice.primary.image}
              alt=""
              className="w-full h-auto object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <span className="inline-block bg-orange-100 text-basketballOrange font-semibold tracking-widest uppercase px-4 py-2 rounded-full text-sm">
            {slice.primary.sub_heading}
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-oswald uppercase text-blacksmoke leading-tight">
            {slice.primary.heading}
          </h2>

          <div className="mt-8 text-gray-600 leading-8 text-lg">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        {slice.primary.button_label && slice.primary.button_link && (
          <div className="mt-10">
            <PrismicNextLink
              field={slice.primary.button_link}
              className="inline-flex items-center rounded-full bg-basketballOrange px-6 py-3 text-white font-semibold transition hover:opacity-90"
            >
              {slice.primary.button_label}
            </PrismicNextLink>
          </div>
        )}
      </div>
    </section>
  );
};

export default Welcome;