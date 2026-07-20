"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import { Eye, Target, Award } from "lucide-react";

export type MissionVisionProps =
  SliceComponentProps<Content.MissionVisionSlice>;

const MissionVision = ({
  slice,
}: MissionVisionProps): JSX.Element => {
  return (
    <section
      className="bg-slate-50 py-24"
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

        {/* Vision & Mission */}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-blue-100 bg-white p-10 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <Eye className="text-primary" size={38} />
            </div>

            <h3 className="mb-5 text-3xl font-bold text-slate-900">
              {slice.primary.vision_title}
            </h3>

            <div className="leading-8 text-slate-600">
              <PrismicRichText
                field={slice.primary.vision_description}
              />
            </div>
          </motion.div>

          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-cyan-100 bg-white p-10 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-100">
              <Target className="text-cyan-600" size={38} />
            </div>

            <h3 className="mb-5 text-3xl font-bold text-slate-900">
              {slice.primary.mission_title}
            </h3>

            <div className="leading-8 text-slate-600">
              <PrismicRichText
                field={slice.primary.mission_description}
              />
            </div>
          </motion.div>
        </div>

        {/* Core Values */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24"
        >
          <h3 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Our Core Values
          </h3>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {slice.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <Award
                  className="mb-5 text-primary"
                  size={36}
                />

                <h4 className="mb-4 text-xl font-bold text-slate-900">
                  {item.value_title}
                </h4>

                <div className="text-slate-600 leading-7">
                  <PrismicRichText
                    field={item.value_description}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;