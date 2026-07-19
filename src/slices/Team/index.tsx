"use client";

import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export type TeamProps = SliceComponentProps<Content.TeamSlice>;

const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white py-24"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-orange-600">
            Our Team
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            {slice.primary.heading}
          </h2>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-orange-500" />

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Meet our experienced and passionate coaches dedicated to developing
            future champions through professional training, discipline and
            teamwork.
          </p>
        </motion.div>

        {/* Coach Cards */}

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {slice.primary.coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              {/* Coach Image */}

              <div className="mx-auto h-52 w-52 overflow-hidden rounded-full border-4 border-orange-500 shadow-lg">
                <PrismicNextImage
                  field={coach.image}
                  fallbackAlt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Name */}

              <h3 className="mt-8 text-center text-2xl font-bold uppercase text-gray-900">
                {coach.name}
              </h3>

              {/* Badge */}

              <div className="mt-3 flex items-center justify-center gap-2 text-orange-500">
                <Award size={18} />

                <span className="font-semibold uppercase tracking-wide">
                  Coach
                </span>
              </div>

              {/* Designation */}

              <div className="prose prose-sm mx-auto mt-5 max-w-xs text-center text-gray-600">
                <PrismicRichText field={coach.designation} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;