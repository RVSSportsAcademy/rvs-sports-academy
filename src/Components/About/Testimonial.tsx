import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Quote } from "lucide-react";

export type TestimonialProps = SliceComponentProps<Content.AboutSlice>;

const Testimonial = ({ slice }: TestimonialProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-white py-20"
      )}
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-orange-500">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-deepBlue md:text-5xl">
            What Our Athletes Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Hear from our students and parents about their journey at
            RVS Sports Academy.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="grid items-center lg:grid-cols-2">
            {/* Image */}
            <div className="relative">
              <PrismicNextImage
                field={slice.primary.newsletter_image}
                fallbackAlt=""
                className="h-full min-h-[450px] w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-10 lg:p-14">
              <Quote
                className="mb-6 text-orange-500"
                size={55}
              />

              <h3 className="mb-4 text-3xl font-bold text-deepBlue">
                {slice.primary.newsletter_heading}
              </h3>

              <div className="text-lg leading-8 text-gray-600">
                <PrismicRichText
                  field={slice.primary.newsletterdiscription}
                />
              </div>

              <div className="mt-8">
                <h4 className="text-2xl font-bold text-orange-500">
                  {slice.primary.newsletter_title}
                </h4>

                <p className="mt-2 text-gray-500">
                  RVS Sports Academy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;