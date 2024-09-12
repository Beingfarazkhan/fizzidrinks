import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { asText } from "@prismicio/client";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="text-7xl uppercase font-black hero-header leading-[.8] text-orange-500 md:text-[9rem] lg:text-[12rem]">
              {asText(slice.primary.heading)}
            </h1>
            <div className="hero-subheading text-5xl mt-12 font-semibold text-sky-950 lg:text-6xl">
              <PrismicRichText field={slice.primary.subheading} />
            </div>
            <PrismicRichText field={slice.primary.body} />
            <PrismicNextLink field={slice.primary.button_link}>
              {slice.primary.button_text}
            </PrismicNextLink>
          </div>
        </div>
        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <PrismicNextImage field={slice.primary.cans_image} />
          <PrismicRichText field={slice.primary.second_heading} />
          <PrismicRichText field={slice.primary.second_body} />
        </div>
      </div>

    </Bounded>
  );
};

export default Hero;
