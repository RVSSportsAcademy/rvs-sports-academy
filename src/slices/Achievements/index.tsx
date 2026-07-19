import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Achievements`.
 */
export type AchievementsProps = SliceComponentProps<Content.AchievementsSlice>;

/**
 * Component for "Achievements" Slices.
 */
const Achievements = ({ slice }: AchievementsProps): JSX.Element => {
  return (
    <section
      className={cn("min-h-screen py-12 bg-lightGray")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-deepBlue mb-12 text-center">
          {slice.primary.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {slice.primary.achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-deepBlue mb-2">
                {achievement.achievement_number}
              </div>
              <div className="text-lg font-semibold text-gray-700">
                {achievement.achievement_label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
