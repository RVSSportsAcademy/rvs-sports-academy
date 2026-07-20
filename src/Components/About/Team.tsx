import { PrismicNextImage } from "@prismicio/next";
import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type TeamProps = SliceComponentProps<Content.AboutSlice>;

const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn("bg-gray-50 py-20")}
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-orange-500">
            Meet Our Team
          </span>

          <h2 className="mt-6 text-4xl font-bold text-deepBlue md:text-5xl">
            The Best Professionals
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Our experienced coaches are dedicated to developing skills,
            discipline, teamwork, and confidence in every athlete.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {slice.primary.trainer.map((trainer, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <PrismicNextImage
                  field={trainer.trainer_image}
                  fallbackAlt=""
                  className="h-96 w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-deepBlue">
                  {trainer.trainer_name}
                </h3>

                <div className="mx-auto my-4 h-1 w-16 rounded-full bg-orange-500"></div>

                <p className="font-semibold uppercase tracking-wide text-orange-500">
                  {trainer.trainer_title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;