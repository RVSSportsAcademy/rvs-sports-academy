import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
  PrismicRichText,
  PrismicLink,
} from "@prismicio/react";

/**
 * Props for `Events`.
 */
export type EventsProps = SliceComponentProps<Content.EventsSlice>;

const Events = ({ slice }: EventsProps): JSX.Element => {
  return (
    <section
      className="py-20 bg-gray-50"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          {slice.primary.title}
        </h2>

        <div className="text-center text-gray-600 mb-10">
          <PrismicRichText field={slice.primary.description} />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {slice.primary.event_cards.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {event.event_image.url && (
                <img
                  src={event.event_image.url}
                  alt={event.event_image.alt ?? ""}
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  {event.event_title}
                </h3>

                <p className="text-orange-500 mb-1">
                  📅 {event.event_date}
                </p>

                <p className="text-gray-500 mb-4">
                  📍 {event.event_location}
                </p>

                <PrismicRichText field={event.description} />

                <PrismicLink
                  field={event.button_link}
                  className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
                >
                  {event.button_text}
                </PrismicLink>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;