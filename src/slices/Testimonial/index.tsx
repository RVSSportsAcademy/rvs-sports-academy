"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export type TestimonialProps =
  SliceComponentProps<Content.TestimonialSlice>;

const Testimonial = ({
  slice,
}: TestimonialProps): JSX.Element => {
  return (
    <section
      className="bg-slate-50 py-24"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            {slice.primary.subtitle}
          </p>

          <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            {slice.primary.title}
          </h2>

          <div className="mt-6 text-lg leading-8 text-slate-600">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </motion.div>

        {/* Testimonials */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {slice.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Quote */}

              <Quote
                size={42}
                className="absolute right-8 top-8 text-blue-100"
              />

              {/* Stars */}

              <div className="mb-6 flex gap-1">
                {Array.from({
                  length: Number(item.rating) || 5,
                }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial */}

              <div className="mb-8 text-slate-600 leading-8 italic">
                <PrismicRichText field={item.testimonial} />
              </div>

              {/* User */}

              <div className="flex items-center gap-4">
                <PrismicNextImage
                  field={item.photo}
                  fallbackAlt=""
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-blue-100"
                />

                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-primary font-medium">
                    {item.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;