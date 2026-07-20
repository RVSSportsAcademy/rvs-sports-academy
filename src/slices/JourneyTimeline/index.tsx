"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

export type JourneyTimelineProps =
  SliceComponentProps<Content.JourneyTimelineSlice>;

const JourneyTimeline = ({
  slice,
}: JourneyTimelineProps): JSX.Element => {
  return (
    <section
      className="bg-white py-24"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
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

        {/* Timeline */}

        <div className="relative">
          {/* Center Line */}

          <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-blue-100 lg:left-1/2 lg:-translate-x-1/2 lg:block" />

          <div className="space-y-16">
            {slice.items.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex flex-col items-center lg:flex-row ${
                    isLeft ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}

                  <div className="w-full lg:w-1/2 lg:px-12">
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      <PrismicNextImage
                        field={item.milestone_image}
                        fallbackAlt=""
                        className="h-64 w-full object-cover"
                      />

                      <div className="p-8">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-primary">
                          <CalendarDays size={16} />
                          {item.year}
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900">
                          {item.milestone_title}
                        </h3>

                        <div className="mt-4 leading-7 text-slate-600">
                          <PrismicRichText
                            field={item.milestone_description}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}

                  <div className="absolute hidden lg:flex left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-primary shadow-xl">
                      <CalendarDays
                        className="text-white"
                        size={24}
                      />
                    </div>
                  </div>

                  {/* Spacer */}

                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;