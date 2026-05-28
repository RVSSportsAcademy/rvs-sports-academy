import { PrismicNextImage } from "@prismicio/next";
import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type AboutProps = SliceComponentProps<Content.AboutSlice>;

const AboutSection = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn(
        "relative bg-[#FCEEE7] py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-lg"
      )}
    >
      <div className="flex items-center justify-evenly mb-8 md:mb-0">
        <div
          className="relative inline-block  p-2 rounded-lg w-full max-w-sm"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #FF8C42 25%, transparent 25%), linear-gradient(315deg, #FF8C42 25%, transparent 25%)",
            backgroundPosition: "top left, bottom right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "50% 50%",
          }}
        >
          <h1 className="absolute top-0 left-72 font-roboto-condensed tracking-wide text-[0px] md:text-9xl text-white opacity-90 uppercase font-[500]">
            About
          </h1>
          <PrismicNextImage
            field={slice.primary.background_image}
            alt=""
            className="rounded-lg object-cover w-full h-auto aspect-[3/4]"
          />
        </div>
      </div>
      <div className="w-full md:pl-12 text-center md:text-left">
        <p className="text-red-500 text-orange-600  uppercase text-sm md:text-4xl font-bold">
          About Us
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {slice.primary.heading}
        </h1>
        <div className="text-gray-700 mb-4 text-sm md:text-base">
          <PrismicRichText field={slice.primary.description} />
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;
