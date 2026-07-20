"use client";

import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import {
  PrismicNextImage,
  PrismicNextLink,
} from "@prismicio/next";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
} from "lucide-react";

export type TrainingProps =
  SliceComponentProps<Content.TrainingSlice>;

const Training = ({
  slice,
}: TrainingProps): JSX.Element => {
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
            {slice.primary.heading}
          </h2>

          <div className="mt-6 text-lg leading-8 text-slate-600">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </motion.div>

        {/* Plans */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {slice.items.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-56 overflow-hidden">
                <PrismicNextImage
                  field={plan.image}
                  fallbackAlt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Price */}

                <div className="absolute right-4 top-4 rounded-full bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg">
                  {plan.price}
                </div>
              </div>

              {/* Content */}

              <div className="p-6">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {plan.title}
                </h3>

                {/* Duration */}

                <div className="mb-5 flex items-center gap-2 text-primary">
                  <Calendar size={18} />

                  <span className="font-medium">
                    {plan.duration}
                  </span>
                </div>

                {/* Description */}

                <div className="mb-6 text-slate-600 leading-7">
                  <PrismicRichText field={plan.description} />
                </div>

                {/* Features */}

                <div className="mb-8">
                  <PrismicRichText
                    field={plan.features}
                    components={{
                      list: ({ children }) => (
                        <ul className="space-y-3">
                          {children}
                        </ul>
                      ),

                      listItem: ({ children }) => (
                        <li className="flex items-center gap-3 text-slate-700">
                          <CheckCircle
                            className="h-5 w-5 text-primary shrink-0"
                          />

                          <span>{children}</span>
                        </li>
                      ),
                    }}
                  />
                </div>

                {/* Button */}

                <PrismicNextLink
                  field={slice.primary.button_link}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {slice.primary.button_text}

                  <ArrowRight size={18} />
                </PrismicNextLink>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;