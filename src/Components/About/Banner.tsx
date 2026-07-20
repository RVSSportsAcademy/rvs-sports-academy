import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type BannerProps = SliceComponentProps<Content.AboutSlice>;

const Banner = ({ slice }: BannerProps): JSX.Element => {
  const primary = slice.primary as any;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn(
        "relative flex min-h-[70vh] items-center justify-center overflow-hidden"
      )}
    >
      {/* Background Image */}
      {slice.primary.background_image?.url && (
        <PrismicNextImage
          field={slice.primary.background_image}
          fill
          priority
          fallbackAlt=""
          className="absolute inset-0 -z-20 object-cover object-center"
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      {/* Orange Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-6 text-center">
        <span className="mb-6 inline-block rounded-full border border-orange-500 bg-orange-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-orange-400">
          {primary.banner_title || "Welcome to RVS Sports Academy"}
        </span>

        <h1 className="mb-6 text-5xl font-extrabold uppercase text-white md:text-7xl">
          {primary.heading || "About Us"}
        </h1>

        <div className="mx-auto max-w-3xl text-lg leading-8 text-gray-200">
          <PrismicRichText field={primary.description} />
        </div>

        <div className="mx-auto mt-10 h-1 w-24 rounded-full bg-orange-500" />
      </div>
    </section>
  );
};

export default Banner;