"use client";

import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { ArrowRight, Trophy, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export type WelcomeProps = SliceComponentProps<Content.WelcomeSlice>;

const Welcome = ({ slice }: WelcomeProps): JSX.Element => {
  return (
    <section
      className="relative overflow-hidden bg-page py-24"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10"
        )}
      >
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[32px] shadow-2xl">
            <PrismicNextImage
              field={slice.primary.image}
              fallbackAlt=""
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-2xl">
            <p className="text-4xl font-bold text-primary">15+</p>
            <p className="text-sm text-body">Years of Excellence</p>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {slice.primary.sub_heading}
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-heading lg:text-5xl">
            {slice.primary.heading}
          </h2>

          <div className="mt-6 text-lg leading-8 text-body">
            <PrismicRichText field={slice.primary.description} />
          </div>

          {/* Features */}
<div className="mt-10 grid gap-5 sm:grid-cols-2">
  {slice.items.map((item, index) => {
    const icons = [
      <Trophy key="trophy" className="text-primary" />,
      <Users key="users" className="text-primary" />,
      <ShieldCheck key="shield" className="text-primary" />,
      <ArrowRight key="arrow" className="text-primary" />,
    ];

    return (
      <div
        key={index}
        className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        {icons[index % icons.length]}

        <span className="font-medium text-heading">
          {item.feature_title}
        </span>
      </div>
    );
  })}
</div>
          {/* Button */}
          {slice.primary.button_label && slice.primary.button_link && (
            <div className="mt-10">
              <PrismicNextLink
                field={slice.primary.button_link}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-secondary"
              >
                {slice.primary.button_label}
                <ArrowRight size={18} />
              </PrismicNextLink>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;