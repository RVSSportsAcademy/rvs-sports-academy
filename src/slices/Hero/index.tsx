"use client";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/Components/Utils/Button";
import { cn } from "@/libs/utils";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Trophy,
  Users,
  Medal,
  Star,
} from "lucide-react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const stats = [
    {
      icon: <Users className="h-10 w-10 text-basketballOrange" />,
      value: Number(slice.primary.students_count) || 500,
      label: "Students",
    },
    {
      icon: <Trophy className="h-10 w-10 text-basketballOrange" />,
      value: Number(slice.primary.coaches_count) || 25,
      label: "Expert Coaches",
    },
    {
      icon: <Medal className="h-10 w-10 text-basketballOrange" />,
      value: Number(slice.primary.tournaments_count) || 50,
      label: "Tournaments",
    },
    {
      icon: <Star className="h-10 w-10 text-basketballOrange" />,
      value: Number(slice.primary.experience_count) || 10,
      label: "Years Experience",
    },
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Image */}
      {slice.primary.hero_image.url && (
        <PrismicNextImage
          field={slice.primary.hero_image}
          fill
          priority
          fallbackAlt=""
          className="absolute inset-0 -z-20 object-cover object-center"
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Subtitle */}
          {slice.primary.subtitle && (
            <span className="mb-5 inline-flex rounded-full border border-basketballOrange bg-basketballOrange/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-basketballOrange">
              {slice.primary.subtitle}
            </span>
          )}

          {/* Title */}
          <h1
            className={cn(
              "mt-4 font-montserrat font-extrabold",
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
              "leading-tight text-white"
            )}
          >
            {slice.primary.title}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
            {slice.primary.paragraph}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <PrismicNextLink field={slice.primary.link}>
              <Button
                color="basketballOrange"
                size="large"
                className="rounded-xl px-8 py-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {slice.primary.link_label}
              </Button>
            </PrismicNextLink>

            {isFilled.link(slice.primary.secondary_link) && (
              <PrismicNextLink field={slice.primary.secondary_link}>
                <Button
                  color="white"
                  size="large"
                  className="rounded-xl border-2 border-white bg-transparent px-8 py-4 text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-2xl"
                >
                  {slice.primary.secondary_link_label}
                </Button>
              </PrismicNextLink>
            )}
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:bg-white/15"
              >
                <div className="flex justify-center">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-4xl font-bold text-white">
                  {item.value}+
                </h3>

                <p className="mt-2 text-sm text-white/70">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-14 flex justify-center"
          >
            <div className="flex flex-col items-center">
              <span className="mb-2 text-xs uppercase tracking-[4px] text-white/60">
                Scroll Down
              </span>

              <ChevronDown
                className="text-basketballOrange"
                size={34}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;