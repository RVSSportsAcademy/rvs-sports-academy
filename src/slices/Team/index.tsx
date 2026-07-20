"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";

export type TeamProps = SliceComponentProps<Content.TeamSlice>;

const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <section
      className="py-24 bg-white"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            {slice.primary.heading}
          </h2>
        </motion.div>

        {/* Coaches */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {slice.primary.coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="overflow-hidden rounded-3xl shadow-xl bg-white"
            >
              <div className="relative h-[400px]">
                <PrismicNextImage
                  field={coach.image}
                  fallbackAlt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">
                  {coach.name}
                </h3>

                <div className="mt-3 text-gray-600">
                  <PrismicRichText field={coach.designation} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;