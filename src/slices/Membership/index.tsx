import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Membership`.
 */
export type MembershipProps = SliceComponentProps<Content.MembershipSlice>;

/**
 * Component for "Membership" Slices.
 */
const Membership = ({ slice }: MembershipProps): JSX.Element => {
  const primary = slice.primary as any;
  const membership_plans = (primary.membership_plans || []) as any[];

  return (
    <section
      className={cn("min-h-screen py-12")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-deepBlue mb-12 text-center">
          {slice.primary.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membership_plans.map((plan: any, index: number) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-deepBlue">
              <h3 className="text-2xl font-bold text-deepBlue mb-2">
                {plan.plan_name}
              </h3>
              <div className="text-3xl font-bold text-deepBlue mb-4">
                {plan.plan_price}
              </div>
              <div className="mb-6">
                <PrismicRichText field={plan.plan_features} />
              </div>
              {plan.plan_button?.url && (
                <PrismicNextLink field={plan.plan_button} className="btn btn-primary w-full">
                  {plan.plan_button_label}
                </PrismicNextLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
