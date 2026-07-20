import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FreeTrial`.
 */
export type FreeTrialProps = SliceComponentProps<Content.FreeTrialSlice>;

/**
 * Component for "FreeTrial" Slices.
 */
const FreeTrial = ({ slice }: FreeTrialProps): JSX.Element => {
	return (
		<section
			className={cn(
				"w-full flex flex-col md:flex-row items-center justify-between p-5 md:p-10",
				"space-y-8 md:space-y-0"
			)}
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			{slice.primary.title.map((title, index) => (
				<div
					key={index}
					className={cn(
						"flex flex-col items-center justify-between gap-8 md:gap-16 w-full p-5 md:p-10 rounded"
					)}
				>
					<div
						className={cn(
							"flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-16 w-full p-5 md:p-10 rounded"
						)}
					>
						<div className="text-center md:text-left">
							<h1 className="text-xl md:text-2xl">{title.sub_heading}</h1>
							<h1
								className={cn(
									"text-3xl md:text-5xl font-bold font-montserrat text-black"
								)}
							>
								{title.heading}
							</h1>
						</div>

						<PrismicNextLink field={title.link}>
							<button
								className={cn(
									"text-white text-base md:text-xl font-bold uppercase font-oswald rounded-lg w-32 md:w-40 h-10 md:h-12 bg-primary"
								)}
							>
								{title.link_label}
							</button>
						</PrismicNextLink>
					</div>
					<div className="relative w-full max-w-5xl">
						<PrismicNextImage
							className="w-full h-auto rounded-lg"
							field={slice.primary.image}
							alt=""
						/>
						<div className="absolute inset-0 flex items-center justify-center text-center px-5">
							<h1
								className={cn(
									"text-gray-300 text-xl md:text-2xl lg:text-4xl font-bold uppercase font-roboto",
									"w-full md:w-1/3"
								)}
							>
								{slice.primary.overtext}
							</h1>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default FreeTrial;
