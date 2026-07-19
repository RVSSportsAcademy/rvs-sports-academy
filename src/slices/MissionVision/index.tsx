import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MissionVision`.
 */
export type MissionVisionProps = SliceComponentProps<Content.MissionVisionSlice>;

/**
 * Component for "MissionVision" Slices.
 */
const MissionVision = ({ slice }: MissionVisionProps): JSX.Element => {
  return (
    <section
      className={cn("min-h-screen py-12")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-deepBlue mb-8 text-center">
          {slice.primary.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-deepBlue mb-4">Mission</h2>
            <PrismicRichText field={slice.primary.mission} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-deepBlue mb-4">Vision</h2>
            <PrismicRichText field={slice.primary.vision} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
