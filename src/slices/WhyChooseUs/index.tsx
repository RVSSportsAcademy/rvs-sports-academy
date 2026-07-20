"use client";

import { Content } from "@prismicio/client";
import { PrismicLink } from "@prismicio/react";
import {
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Target,
  Award,
  ShieldCheck,
  Star,
  ArrowRight,
} from "lucide-react";

export type WhyChooseUsProps =
  SliceComponentProps<Content.WhyChooseUsSlice>;

const icons = [
  Trophy,
  Users,
  Target,
  Award,
  ShieldCheck,
  Star,
];

const WhyChooseUs = ({
  slice,
}: WhyChooseUsProps): JSX.Element => {
  const stats = [
    {
      number: slice.primary.stat_1_number,
      label: slice.primary.stat_1_label,
    },
    {
      number: slice.primary.stat_2_number,
      label: slice.primary.stat_2_label,
    },
    {
      number: slice.primary.stat_3_number,
      label: slice.primary.stat_3_label,
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-page py-24"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-primary">
            {slice.primary.subtitle}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-heading md:text-5xl">
            {slice.primary.title}
          </h2>

          <div className="mx-auto mt-6 text-lg leading-8 text-body">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </motion.div>

        {/* Feature Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {slice.primary.reasons.map((reason, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-[30px] border border-border bg-white p-8 shadow-card transition-all duration-300 hover:shadow-hover"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-heading">
                  {reason.reason_title}
                </h3>

                <div className="text-body leading-7">
                  <PrismicRichText
                    field={reason.reason_description}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Statistics */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="rounded-3xl border border-border bg-white p-8 text-center shadow-card"
            >
              <h3 className="text-5xl font-bold text-primary">
                {stat.number}
              </h3>

              <p className="mt-3 text-body">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <PrismicLink
            field={slice.primary.button_link}
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:shadow-xl"
          >
            {slice.primary.button_text}

            <ArrowRight size={20} />
          </PrismicLink>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;