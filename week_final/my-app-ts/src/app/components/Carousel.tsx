/* eslint-disable @next/next/no-img-element */
/**
 * @author CHANG, HUNG-YING <horningch@gmail.com>
 */
import { Carousel as SceneNarration } from "flowbite-react";
import { type Carousel as CarouselProps } from "@type/carousel";

export function MyCarousel({ props }: { props: Readonly<CarouselProps[]> }) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <SceneNarration className="rounded-3xl overflow-hidden">
        {props.map((props, idx) => (
          <img
            key={idx}
            src={props.imgSrc}
            alt={props.alt.trim()}
            loading="lazy"
          />
        ))}
      </SceneNarration>
    </div>
  );
}
