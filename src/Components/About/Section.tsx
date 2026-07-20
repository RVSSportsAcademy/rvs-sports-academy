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
      className={cn("bg-white py-20")}
    >
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-3xl bg-orange-500"></div>

            <PrismicNextImage
              field={slice.primary.background_image}
              fallbackAlt=""
              className="relative z-10 h-[500px] w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-orange-500">
              About RVS Sports Academy
            </span>

            <h2 className="mt-6 text-4xl font-bold text-deepBlue md:text-5xl">
              {slice.primary.heading}
            </h2>

            <div className="mt-6 text-lg leading-8 text-gray-600">
              <PrismicRichText field={slice.primary.description} />
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-orange-50 p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-4xl font-bold text-orange-500">500+</h3>
                <p className="mt-2 text-gray-600">Students Trained</p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-4xl font-bold text-orange-500">25+</h3>
                <p className="mt-2 text-gray-600">Expert Coaches</p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-4xl font-bold text-orange-500">50+</h3>
                <p className="mt-2 text-gray-600">Championships</p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-4xl font-bold text-orange-500">10+</h3>
                <p className="mt-2 text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;