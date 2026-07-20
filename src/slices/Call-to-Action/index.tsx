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
import { ArrowRight, Phone } from "lucide-react";

export type CTAProps =
  SliceComponentProps<Content.CtaSlice>;

const CTA = ({ slice }: CTAProps): JSX.Element => {
  return (
    <section
      className="relative overflow-hidden py-24"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Background */}

      <div className="absolute inset-0">
        <PrismicNextImage
          field={slice.primary.background_image}
          fallbackAlt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-800/80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center text-white">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] backdrop-blur-md">
            {slice.primary.subtitle}
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-6xl">
            {slice.primary.title}
          </h2>

          <div className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
            <PrismicRichText field={slice.primary.description} />
          </div>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <PrismicNextLink
              field={slice.primary.primary_button_link}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-900 transition hover:scale-105"
            >
              {slice.primary.primary_button_text}
              <ArrowRight size={20} />
            </PrismicNextLink>

            <PrismicNextLink
              field={slice.primary.secondary_button_link}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-900"
            >
              <Phone size={20} />
              {slice.primary.secondary_button_text}
            </PrismicNextLink>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;