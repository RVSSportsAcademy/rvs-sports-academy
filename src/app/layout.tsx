import { Metadata } from "next";
import { PrismicPreview } from "@prismicio/next";

import { createClient, repositoryName } from "@/prismicio";

import {
  outfit,
  roboto,
  montserrat,
  oswald,
  roboto_condensed,
  inter,
  manrope,
} from "@/libs/fonts";

import { cn } from "@/libs/utils";

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  try {
    const settings = await client.getSingle("settings");

    return {
      title: {
        default: settings.data.site_title || "RVS Sports Welfare Association",

template: "%s | RVS Sports Welfare Association",
      },

      description:
        settings.data.meta_description ||
        "Professional Basketball Coaching & Player Development.",

      openGraph: {
        title: settings.data.site_title || "RVS Sports Welfare Association",
        description:
          settings.data.meta_description ||
          "Professional Basketball Coaching",

        images: settings.data.og_image?.url
          ? [settings.data.og_image.url]
          : [],
      },

      twitter: {
        card: "summary_large_image",
      },
    };
  } catch {
    return {
      title: "RVS Sports Welfare Association",
      description:
        "Professional Basketball Coaching & Player Development.",
    };
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          outfit,
          roboto,
          montserrat,
          oswald,
          roboto_condensed,
          inter,
          manrope,
          "antialiased bg-page text-heading"
        )}
      >
        <Header />

        <main>{children}</main>

        <Footer />

        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}