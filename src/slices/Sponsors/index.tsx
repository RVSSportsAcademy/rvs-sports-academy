"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { motion } from "framer-motion";
import { ArrowUpRight, Handshake } from "lucide-react";

export type SponsorsProps =
  SliceComponentProps<Content.SponsorsSlice>;

const Sponsors = ({ slice }: SponsorsProps): JSX.Element => {
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

        {/* Sponsors Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {slice.items.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
              }}
            >
              <PrismicNextLink
                field={sponsor.sponsor_link}
                className="group block h-full"
              >
                <div className="flex h-full flex-col rounded-[30px] border border-border bg-white p-8 shadow-card transition-all duration-300 hover:shadow-hover">

                  {/* Logo */}

                  <div className="flex h-28 items-center justify-center">
                    <PrismicNextImage
                      field={sponsor.sponsor_logo}
                      fallbackAlt=""
                      className="max-h-20 w-auto object-contain grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                    />
                  </div>

                  {/* Name */}

                  <h3 className="mt-8 text-center text-2xl font-bold text-heading">
                    {sponsor.sponsor_name}
                  </h3>

                  {/* Description */}

                  <div className="mt-4 flex-1 text-center text-body leading-7">
                    <PrismicRichText
                      field={sponsor.sponsor_description}
                    />
                  </div>

                  {/* Button */}

                  <div className="mt-8 flex items-center justify-center gap-2 font-semibold text-primary transition group-hover:gap-3">
                    Visit Website

                    <ArrowUpRight size={18} />
                  </div>

                </div>
              </PrismicNextLink>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-[36px] bg-gradient-to-r from-primary to-blue-700 p-10 text-center text-white shadow-2xl"
        >
          <div className="mb-5 flex justify-center">
            <div className="rounded-full bg-white/20 p-4">
              <Handshake size={40} />
            </div>
          </div>

          <h3 className="text-3xl font-bold md:text-4xl">
            Building Strong Partnerships
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Together with our partners and sponsors, we create
            opportunities that inspire athletes, strengthen
            communities, and shape the future of sports.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Sponsors;