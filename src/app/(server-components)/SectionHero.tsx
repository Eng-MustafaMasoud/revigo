import React, { FC } from "react";
// import imagePng from "@/images/hero-right.png";
import bgHero from "@/images//new/heroSection-bg.jpg";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionHero flex  lg:flex-col relative  `}>
      {/* <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
            Hotel, car & experiences
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Accompanying us, you have a trip full of experiences. With Chisfis,
            booking accommodation, resort villas, hotels
          </span>
          <ButtonPrimary href="/listing-stay-map" sizeClass="px-5 py-4 sm:px-7">
            Start your search
          </ButtonPrimary>
        </div>
        <div className="flex-grow">
          <Image className="w-full" src={imagePng} alt="hero" priority />
        </div>
      </div> */}

      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-grow">
          <Image
            className="w-full h-full object-fill"
            src={bgHero}
            alt="hero"
            priority
          />
          <div className="absolute flex gap-24 items-center  flex-col top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] z-10">
            <h2 className="font-extrabold text-4xl md:text-5xl xl:text-7xl !leading-[114%]   flex items-center justify-center  text-white">
              لحظاتك المميزة تبدأ هنا
            </h2>
            <ButtonPrimary
              href="/listing-stay-map"
              className="rounded-xl  w-[fit-content] !px-10 !py-2 sm:px-7 !text-2xl font-bold bg-orange-400 hover:bg-orange-500  "
              
            >
            إختر وجهتك
            
            </ButtonPrimary>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex z-10 mb-12 lg:mb-0 lg:-mt-20 w-full justify-center items-center">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
