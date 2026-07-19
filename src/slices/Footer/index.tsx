import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  return (
    <footer
      className={cn("bg-deepBlue text-white py-12")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {slice.primary.footer_sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">
                {section.section_title}
              </h4>
              <PrismicRichText field={section.section_content} />
            </div>
          ))}
        </div>
        <div className="border-t border-white pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              {slice.primary.copyright_text}
            </p>
            {slice.primary.social_links.map((link, index) => (
              <PrismicNextLink key={index} field={link.social_link} className="ml-4">
                {link.social_label}
              </PrismicNextLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
