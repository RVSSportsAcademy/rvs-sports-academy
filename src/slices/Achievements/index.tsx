"use client";

import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Star,
  Award,
} from "lucide-react";

export type AchievementsProps =
  SliceComponentProps<Content.AchievementsSlice>;

const icons = [
  Trophy,
  Medal,
  Star,
  Award,
];

const Achievements = ({
  slice,
}: AchievementsProps): JSX.Element => {
  return (
    <section
      className="relative overflow-hidden bg-page py-24"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

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
            <PrismicRichText
              field={slice.primary.description}
            />
          </div>
        </motion.div>

        {/* Achievement Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {slice.items.map((achievement, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group rounded-[32px] border border-border bg-white p-8 text-center shadow-card transition-all duration-300 hover:shadow-hover"
              >
                <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={34} />
                </div>

                <h3 className="text-5xl font-extrabold text-primary">
                  {achievement.achievement_number}
                </h3>

                <p className="mt-4 text-lg font-semibold text-heading">
                  {achievement.achievement_label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-[36px] bg-gradient-to-r from-primary to-blue-700 p-10 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold md:text-4xl">
            Inspiring Champions Every Year
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-blue-100">
            Every milestone reflects our commitment to nurturing talent,
            promoting discipline, and creating opportunities for young
            athletes to achieve success at every level.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;