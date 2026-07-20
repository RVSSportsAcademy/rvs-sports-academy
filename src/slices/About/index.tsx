"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export type AboutProps = SliceComponentProps<Content.AboutSlice>;

const About = ({ slice }: AboutProps): JSX.Element => {
  console.log("About Primary:", JSON.stringify(slice.primary, null, 2));
  console.log(slice.primary.main_image);
console.log(slice.primary.secondary_image);
  return (
    <section
      className="bg-white py-24"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Images */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <PrismicNextImage
            field={slice.primary.main_image}
            fallbackAlt=""
            className="w-full rounded-3xl object-cover shadow-2xl"
          />

          <div className="absolute -bottom-10 -right-6 w-56 rounded-3xl border-8 border-white shadow-2xl">
            <PrismicNextImage
              field={slice.primary.secondary_image}
              fallbackAlt=""
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-20 right-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-semibold uppercase tracking-[0.3em] text-primary">
            {slice.primary.subtitle}
          </span>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            {slice.primary.title}
          </h2>

          <div className="mt-6 text-lg leading-8 text-slate-600">
            <PrismicRichText field={slice.primary.description} />
          </div>

          {/* Features */}

          <div className="mt-10 space-y-5">
            {slice.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <CheckCircle2 className="text-primary" size={24} />

                <span className="text-lg font-medium text-slate-700">
                  {item.feature_title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Statistics */}

          <div className="mt-12 grid grid-cols-2 gap-5">
            {slice.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="text-4xl font-extrabold text-primary">
                  {item.stat_number}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.stat_label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;