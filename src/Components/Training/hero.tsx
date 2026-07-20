import { PrismicNextImage } from "@prismicio/next";
import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type TrainingProps = SliceComponentProps<Content.TrainingSlice>;

const Hero = ({ slice }: TrainingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn(
        "bg-gradient-to-br from-white via-orange-50 to-gray-100 py-20"
      )}
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-orange-500">
            Training Programs
          </span>

          <h1 className="mt-6 text-4xl font-bold text-deepBlue md:text-6xl">
            {slice.primary.heading}
          </h1>

          <div className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            <PrismicRichText field={slice.primary.description} />
          </div>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-orange-500"></div>
        </div>

        {/* Training Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {slice.primary.plans.map((plan, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <PrismicNextImage
                  field={plan.image}
                  fallbackAlt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-deepBlue transition duration-300 group-hover:text-orange-500">
                  {plan.title}
                </h2>

                <div className="my-4 h-1 w-16 rounded-full bg-orange-500"></div>

                <div className="mb-5 text-3xl font-extrabold text-orange-500">
                  {plan.price}
                </div>

                <div className="leading-7 text-gray-600">
                  <PrismicRichText field={plan.description} />
                </div>

                <button className="mt-8 w-full rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-deepBlue">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;