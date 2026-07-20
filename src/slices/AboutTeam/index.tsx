"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export type AboutTeamProps =
  SliceComponentProps<Content.AboutTeamSlice>;

const AboutTeam = ({
  slice,
}: AboutTeamProps): JSX.Element => {
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

        {/* Team Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {slice.items.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="overflow-hidden">
                <PrismicNextImage
                  field={member.photo}
                  fallbackAlt=""
                  className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-2 font-semibold text-primary">
                  {member.designation}
                </p>

                <div className="mt-5 text-slate-600 leading-7">
                  <PrismicRichText field={member.bio} />
                </div>

                {/* Social Icons */}

                <div className="mt-8 flex gap-4">
                  {member.facebook && (
                    <PrismicNextLink
                      field={member.facebook}
                      className="rounded-full bg-slate-100 p-3 transition hover:bg-primary hover:text-white"
                    >
                      <Facebook size={18} />
                    </PrismicNextLink>
                  )}

                  {member.instagram && (
                    <PrismicNextLink
                      field={member.instagram}
                      className="rounded-full bg-slate-100 p-3 transition hover:bg-primary hover:text-white"
                    >
                      <Instagram size={18} />
                    </PrismicNextLink>
                  )}

                  {member.linkedin && (
                    <PrismicNextLink
                      field={member.linkedin}
                      className="rounded-full bg-slate-100 p-3 transition hover:bg-primary hover:text-white"
                    >
                      <Linkedin size={18} />
                    </PrismicNextLink>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;