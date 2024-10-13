"use client"
import { ArrowIcon } from "@/components/ArrowIcon";
import FloatingCan from "@/components/FloatingCan";
import { SodaCanProps } from "@/components/SodaCan";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { Center, Environment, View } from "@react-three/drei";
import clsx from "clsx";
import { useState } from "react";

const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
}[] = [
    { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
    { flavor: "grape", color: "#572981", name: "Grape Goodness" },
    { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
    {
      flavor: "strawberryLemonade",
      color: "#690B3D",
      name: "Strawberry Lemonade",
    },
    { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
  ];

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

/**
 * Component for "Carousel" Slices.
 */
const Carousel = ({ slice }: CarouselProps): JSX.Element => {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);

  const changeFlavor = (index: number) => {
    const newIndex = (index + FLAVORS.length) % FLAVORS.length;

    setCurrentFlavorIndex(newIndex);
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="carousel relative grid h-screen grid-rows-[auto, 4fr, auto] justify-center overflow-hidden bg-white py-12 text-white"
    >
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50"></div>
      <h2 className="relative text-center text-5xl font-bold">
        <PrismicText field={slice.primary.heading} />
      </h2>

      <div className="grid grid-cols-[auto,auto,auto] items-center ">

        {/* Left Button */}
        <ArrowButton onClick={() => {
          changeFlavor(currentFlavorIndex - 1)
        }} direction="left" label="Previous Flavor" />

        {/* Center Can */}
        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <FloatingCan rotationIntensity={1} floatIntensity={0.3} flavor={FLAVORS[currentFlavorIndex].flavor} />
          </Center>

          <Environment files={"/hdrs/lobby.hdr"} environmentIntensity={0.6} environmentRotation={[0, 3, 0]} />
          <directionalLight intensity={6} position={[0, 1, 1]} />
        </View>

        {/* Right Button */}
        <ArrowButton onClick={() => {
          changeFlavor(currentFlavorIndex + 1)
        }} direction="right" label="Next Flavor" />

      </div>
      <div className="text-area relative mx-auto text-center ">
        <div className="text-wrapper text-4xl font-medium">
          <p>{FLAVORS[currentFlavorIndex].name}</p>
        </div>
        <div className="mt-2 font-normal text-2xl opacity-90">
          <PrismicRichText field={slice.primary.price_copy} />
        </div>
      </div>

    </section>
  );
};

export default Carousel;

type ArrowButtonProps = {
  direction?: "right" | "left";
  label: string;
  onClick: () => void;
}

function ArrowButton({ label, onClick, direction = "right" }: ArrowButtonProps) {
  return <button className="size-12 rounded-full border-2 border-white bg-white/10 p-3 opacity-80 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 hover:bg-white/40 md:size-16 lg:size-20" onClick={onClick}>
    <ArrowIcon className={clsx(direction === "right" && "-scale-x-100")} />
    <span className="sr-only">{label}</span>
  </button>
}