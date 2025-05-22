import React from "react";
import { BackgroundByAnima } from "./sections/BackgroundByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima/DivWrapperByAnima";
import { FooterByAnima } from "./sections/FooterByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { HeroByAnima } from "./sections/HeroByAnima";
import { LocationByAnima } from "./sections/LocationByAnima";
import { ProductsByAnima } from "./sections/ProductsByAnima";
import { SectionByAnima } from "./sections/SectionByAnima";

export const Design = (): JSX.Element => {
  return (
    <main className="bg-neutral-50 flex flex-col items-center w-full">
      <div className="bg-neutral-50 w-full max-w-[1440px] relative">
        {/* Hero and top sections */}
        <section className="w-full">
          <HeroByAnima />
          <BackgroundByAnima />
          <FrameWrapperByAnima />
          <div className="relative">
            <img className="w-[7px] h-[7px]" alt="Arrow" src="/arrow-4.svg" />
          </div>
        </section>

        {/* Products section */}
        <section className="w-full">
          <ProductsByAnima />
        </section>

        {/* Location and Frame sections */}
        <section className="w-full flex flex-col">
          <LocationByAnima />
          <FrameByAnima />
        </section>

        {/* Image section */}
        <section className="w-full relative">
          <div className="absolute right-[132px] top-[231px] z-10">
            <div className="relative w-[50px] h-[50px]">
              <div className="absolute w-[26px] h-[50px] top-0 left-0 bg-white" />
              <div className="absolute w-12 h-[45px] top-0.5 left-0.5 [background:linear-gradient(180deg,rgba(246,166,110,1)_0%,rgba(238,116,29,1)_100%)]" />
              <div className="absolute w-[27px] h-[27px] top-[11px] left-[13px] bg-[url(/group-3.png)] bg-[100%_100%]" />
            </div>
          </div>
          <img
            className="w-full max-w-[1435px] mx-auto"
            alt="Image"
            src="/image-177.png"
          />
        </section>

        {/* Div wrapper section */}
        <section className="w-full">
          <DivWrapperByAnima />
        </section>

        {/* Final section and footer */}
        <section className="w-full">
          <SectionByAnima />
          <FooterByAnima />
        </section>
      </div>
    </main>
  );
};
