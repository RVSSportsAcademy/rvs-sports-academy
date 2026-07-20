"use client";

import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
  PrismicRichText,
} from "@prismicio/react";
import {
  PrismicNextImage,
  PrismicNextLink,
} from "@prismicio/next";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Users,
  Award,
} from "lucide-react";

export type FeaturedProgramsProps =
  SliceComponentProps<Content.FeaturedProgramsSlice>;

const FeaturedPrograms = ({
  slice,
}: FeaturedProgramsProps): JSX.Element => {
  return (
    <section
      className="bg-white py-24"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}

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

        {/* Programs Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {slice.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-64 overflow-hidden">
                <PrismicNextImage
                  field={item.program_image}
                  fallbackAlt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  {item.category}
                </div>
              </div>

              {/* Content */}

              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.program_name}
                </h3>

                <div className="mb-6 space-y-3 text-slate-600">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>{item.age_group}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{item.duration}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>{item.skill_level}</span>
                  </div>
                </div>

                <div className="mb-8 text-slate-600 leading-7">
                  <PrismicRichText field={item.description} />
                </div>

                <PrismicNextLink
                  field={item.button_link}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {item.button_text}
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

export default FeaturedPrograms;