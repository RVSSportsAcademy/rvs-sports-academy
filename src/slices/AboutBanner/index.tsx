"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export type AboutBannerProps =
  SliceComponentProps<Content.AboutBannerSlice>;

const AboutBanner = ({
  slice,
}: AboutBannerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden"
    >
      {/* Background Image */}

      <PrismicNextImage
        field={slice.primary.background_image}
        fallbackAlt=""
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-blue-900/60" />

      {/* Decorative Blur */}

      <div className="absolute left-20 top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-center gap-2 text-sm uppercase tracking-widest text-blue-200"
        >
          Home
          <ChevronRight size={16} />
          About
        </motion.div>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-blue-300"
        >
          {slice.primary.subtitle}
        </motion.p>

        {/* Title */}

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl"
        >
          {slice.primary.title}
        </motion.h1>

        {/* Description */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-200"
        >
          <PrismicRichText field={slice.primary.description} />
        </motion.div>

        {/* Divider */}

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mx-auto mt-10 h-1 rounded-full bg-blue-500"
        />
      </div>
    </section>
  );
};

export default AboutBanner;