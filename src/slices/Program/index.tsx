import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Program`.
 */
export type ProgramProps = SliceComponentProps<Content.ProgramSlice>;

const ProgramCard = ({
  image,
  heading,
  description,
}: {
  image: any;
  heading: string;
  description: any;
}) => (
  <div className="group flex gap-5 rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100">
      <PrismicNextImage
        field={image}
        alt=""
        className="h-10 w-10 object-contain"
      />
    </div>

    <div className="flex-1">
      <h4 className="mb-2 text-xl font-semibold text-blacksmoke">
        {heading}
      </h4>

      <div className="text-gray-600 leading-7">
        <PrismicRichText field={description} />
      </div>
    </div>
  </div>
);

/**
 * Component for "Program" Slice.
 */
const Program = ({ slice }: ProgramProps): JSX.Element => {
  const primary = slice.primary as any;
  const basketballItems = Array.isArray(primary.basketball_card)
    ? primary.basketball_card
    : [];

  const communityItems = Array.isArray(primary.community_card)
    ? primary.community_card
    : [];

  return (
    <section
      className={cn("bg-gradient-to-b from-orange-50 to-white py-24")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Image Section */}
        <div className="relative">
          <div className="relative h-[350px] overflow-hidden rounded-3xl shadow-2xl lg:h-[550px]">
            <PrismicNextImage
              field={primary.image}
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-8 right-8 w-40 overflow-hidden rounded-2xl border-8 border-white shadow-2xl lg:w-52">
            <PrismicNextImage
              field={primary.smallimage}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-basketballOrange">
            {slice.primary.sub_heading}
          </span>

          <h2 className="mt-6 text-4xl font-oswald uppercase leading-tight text-blacksmoke lg:text-5xl">
            {slice.primary.heading}
          </h2>

          <div className="mt-6 text-lg leading-8 text-gray-600">
            <PrismicRichText field={slice.primary.description} />
          </div>

          <div className="mt-10 space-y-5">
            {basketballItems.map((card: any, index: number) => (
              <ProgramCard
                key={`basketball-${index}`}
                image={card.basketball_card_image}
                heading={card.basketball_card_heading}
                description={card.basketball_card_description}
              />
            ))}

            {communityItems.map((card: any, index: number) => (
              <ProgramCard
                key={`community-${index}`}
                image={card.community_card_image}
                heading={card.community_card_heading}
                description={card.community_card_description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
