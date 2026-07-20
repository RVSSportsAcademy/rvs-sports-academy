"use client";

import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
  PrismicRichText,
} from "@prismicio/react";
import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Target,
  Users,
  Shield,
  Trophy,
} from "lucide-react";

export type TrainingBenefitsProps =
  SliceComponentProps<Content.TrainingBenefitsSlice>;

const iconMap = {
  Award,
  Heart,
  Target,
  Users,
  Shield,
  Trophy,
};

const TrainingBenefits = ({
  slice,
}: TrainingBenefitsProps): JSX.Element => {
  return (
    <section
      className="bg-white py-24"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
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

        {/* Benefits Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {slice.items.map((item, index) => {
            const Icon =
              iconMap[
                (item.icon as keyof typeof iconMap) || "Award"
              ] || Award;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-2xl"
              >
                {/* Icon */}

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                {/* Title */}

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}

                <div className="leading-8 text-slate-600">
                  <PrismicRichText field={item.description} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainingBenefits;