"use client";

import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { motion } from "framer-motion";

export type PlayersProps = SliceComponentProps<Content.PlayersSlice>;

const Players = ({ slice }: PlayersProps): JSX.Element => {
  const primary = slice.primary as any;
  const players = (primary.players || []) as any[];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-orange-50 py-20"
      )}
    >
      {/* Background Decorations */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-accent">
            {primary.subtitle || "Our Players"}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-deepBlue md:text-5xl">
            {primary.heading}
          </h2>

          <div className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            <PrismicRichText field={primary.description} />
          </div>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-primary" />
        </motion.div>

        {/* Players Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {players.map((player: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              {/* Player Image */}
              <div className="overflow-hidden">
                <PrismicNextImage
                  field={player.image}
                  fallbackAlt=""
                  className="h-96 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-deepBlue transition duration-300 group-hover:text-accent">
                  {player.name}
                </h3>

                {"position" in player && player.position && (
                  <p className="mt-2 font-medium text-accent">
                    {player.position}
                  </p>
                )}

                {"jersey_number" in player && player.jersey_number && (
                  <p className="text-sm text-gray-500">
                    Jersey {player.jersey_number}
                  </p>
                )}

                {"experience" in player && player.experience && (
                  <p className="mt-1 text-sm text-gray-500">
                    Experience: {player.experience}
                  </p>
                )}

                <div className="mx-auto my-4 h-1 w-16 rounded-full bg-primary" />

                <div className="leading-7 text-gray-600">
                  <PrismicRichText field={player.player_description} />
                </div>

                {"achievements" in player &&
                  player.achievements &&
                  player.achievements.length > 0 && (
                    <div className="mt-4 text-left text-sm text-gray-600">
                      <PrismicRichText field={player.achievements} />
                    </div>
                  )}

                <button className="mt-8 w-full rounded-xl bg-primary px-6 py-3 font-semibold text-white transition duration-300 hover:bg-deepBlue">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Players;