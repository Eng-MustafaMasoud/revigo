import Image from "next/image";
import React from "react";
import turkey from "@/images/new/tyrkey.jpg";
import thai from "@/images/new/thai.jpg";
import indonisia from "@/images/new/indonisia.jpg";
import georgia from "@/images/new/georgia.jpg";
const NewSectionHero3 = () => {
  return (
    <section className=" flex gap-4 h-full ">
      <div className="flex-1 h-full relative" >
        <Image
          src={turkey}
          alt=""
          className="rounded-lg h-full  object-cover"
        />
        <div className="absolute bottom-[5%] right-[5%] text-right text-white font-bold flex flex-col items-center">
          <h2 className="text-3xl">تركيا</h2>
          <p>الأكثر طلبا فى شرق أوروبا</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between gap-4 ">
        <div className=" h-full relative">
          <Image
            src={georgia}
            alt=""
            className="rounded-lg h-full  object-cover"
          />
          <div className="absolute bottom-[5%] right-[5%] text-right text-white font-bold flex flex-col items-center">
            <h2 className="text-3xl">جورجيا</h2>
            <p>الأكثر تميزا فى شرق أوروبا    </p>
          </div>
        </div>
        <div className="h-full relative">
          <Image
            src={thai}
            alt=""
            className="rounded-lg h-full  object-cover"
          />
          <div className="absolute bottom-[5%] right-[5%] text-right text-white font-bold flex flex-col items-center">
            <h2 className="text-3xl">تايلاند</h2>
            <p>الأكثر طلبا فى شرق أسيا</p>
          </div>
        </div>
      </div>
      <div className="flex-1 h-full relative">
        <Image
          src={indonisia}
          alt=""
          className="rounded-lg h-full  object-cover"
        />
        <div className="absolute bottom-[5%] right-[5%] text-right text-white font-bold  flex flex-col items-center">
          <h2 className="text-3xl">إندونيسيا</h2>
          <p>الأكثر تميزا فى شرق أسيا</p>
        </div>
      </div>
    </section>
  );
};

export default NewSectionHero3;
