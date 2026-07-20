"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";

export type FooterProps =
  SliceComponentProps<Content.FooterSlice>;

const Footer = ({ slice }: FooterProps): JSX.Element => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-black" />

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <PrismicNextImage
              field={slice.primary.logo}
              fallbackAlt=""
              className="mb-6 h-20 w-auto"
            />

            <div className="leading-7 text-gray-300">
              <PrismicRichText field={slice.primary.about} />
            </div>
          </motion.div>

          {/* Links */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <div className="space-y-4">
              {slice.items.map((item, index) => (
                <PrismicNextLink
                  key={index}
                  field={item.link}
                  className="block text-gray-300 transition hover:text-primary"
                >
                  {item.link_title}
                </PrismicNextLink>
              ))}
            </div>
          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 text-primary"
                />

                <div className="text-gray-300">
                  <PrismicRichText
                    field={slice.primary.address}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Phone
                  size={20}
                  className="text-primary"
                />
                {slice.primary.phone}
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Mail
                  size={20}
                  className="text-primary"
                />
                {slice.primary.email}
              </div>

            </div>
          </motion.div>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/5 p-8 backdrop-blur"
          >
            <h3 className="text-2xl font-bold">
              Join Our Academy
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              Build confidence, discipline and athletic
              excellence with expert coaching.
            </p>

            <button className="mt-8 rounded-full bg-primary px-8 py-3 font-semibold transition hover:scale-105">
              Enroll Today
            </button>
          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-center text-gray-400 md:text-left">
            {slice.primary.copyright}
          </p>

          <button
            onClick={scrollTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary transition hover:scale-110"
          >
            <ArrowUp size={20} />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;