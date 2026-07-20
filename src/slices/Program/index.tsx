"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Users,
  Clock3,
  Award,
  Trophy,
} from "lucide-react";

export type ProgramProps =
  SliceComponentProps<Content.ProgramSlice>;

const Program = ({ slice }: ProgramProps): JSX.Element => {
  return (
    <section
      className="relative overflow-hidden bg-page py-24"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-primary">
            {slice.primary.sub_heading}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-heading md:text-5xl">
            {slice.primary.heading}
          </h2>

          <div className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-body">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </motion.div>

        {/* Program Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {slice.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="overflow-hidden">
                <PrismicNextImage
                  field={item.program_image}
                  fallbackAlt=""
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="space-y-6 p-8">
                <h3 className="text-2xl font-bold text-heading">
                  {item.program_title}
                </h3>

                <div className="text-body leading-7">
                  <PrismicRichText
                    field={item.program_description}
                  />
                </div>

                {/* Info */}

                <div className="space-y-3 rounded-2xl bg-gray-50 p-5">
                  <div className="flex items-center gap-3">
                    <Users
                      className="text-primary"
                      size={18}
                    />
                    <span>{item.age_group}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock3
                      className="text-primary"
                      size={18}
                    />
                    <span>{item.duration}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Award
                      className="text-primary"
                      size={18}
                    />
                    <span>{item.level}</span>
                  </div>
                </div>

                <button className="flex items-center gap-2 font-semibold text-primary transition hover:gap-4">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}

        <div className="mt-24 grid gap-8 rounded-[36px] bg-primary px-8 py-14 text-white md:grid-cols-4">
          <div className="text-center">
            <h3 className="text-5xl font-bold">500+</h3>
            <p className="mt-2">Students</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">25+</h3>
            <p className="mt-2">Expert Coaches</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">50+</h3>
            <p className="mt-2">Championships</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">15+</h3>
            <p className="mt-2">Years Experience</p>
          </div>
        </div>

        {/* Showcase Image */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 overflow-hidden rounded-[36px] shadow-2xl"
        >
          <PrismicNextImage
            field={slice.primary.main_image}
            fallbackAlt=""
            className="h-[500px] w-full object-cover"
          />
        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[36px] bg-gradient-to-r from-primary to-blue-700 px-10 py-16 text-center text-white"
        >
          <Trophy
            className="mx-auto mb-6"
            size={52}
          />

          <h2 className="text-4xl font-bold">
            {slice.primary.cta_heading}
          </h2>

          <div className="mx-auto mt-5 max-w-2xl text-lg opacity-90">
            <PrismicRichText
              field={slice.primary.cta_description}
            />
          </div>

          <PrismicNextLink
            field={slice.primary.cta_button_link}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-primary transition hover:scale-105"
          >
            {slice.primary.cta_button_text}
            <ArrowRight size={18} />
          </PrismicNextLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Program;