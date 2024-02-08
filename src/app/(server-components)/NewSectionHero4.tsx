import React from "react";
import hotel from "@/images/new/hotel.jpg";
import Image from "next/image";

const hotelsExamples = [
  {
    id: 1,
    image: hotel,
    title: "famouse hotel",
    desc: "famous",
  },
  {
    id: 2,
    image: hotel,
    title: "famouse hotel",
    desc: "famous",
  },
  {
    id: 3,
    image: hotel,
    title: "famouse hotel",
    desc: "famous",
  },
  {
    id: 4,
    image: hotel,
    title: "famouse hotel",
    desc: "famous",
  },
  {
    id: 5,
    image: hotel,
    title: "famouse hotel",
    desc: "famous",
  },
  {
    id: 6,
    image: hotel,
    title: "famouse hotel",
    desc: "famous",
  },
  {
    id: 7,
    image: hotel,
    title: "famouse hotel",
    desc: "famous",
  },
  {
    id: 8,
    image: hotel,
    title: "famouse hotel",
    desc: "famous",
  },
];
const NewSectionHero4 = () => {
  return (
    <section className=" rounded-lg flex flex-col items-center py-8 gap-8 w-full justify-between ">
      <div className="flex flex-col justify-center w-full items-center">
        <h2 className="text-2xl">فنادق عالمية</h2>
        <h3 className="font-medium">اكتشف أرقى الفنادق حول العالم</h3>
      </div>
      <div className="grid grid-cols-4  place-content-between w-full gap-4 ">
        {hotelsExamples.map((modal) => (
          <div className="flex shadow-lg px-8 py-6 gap-4 rounded-lg bg-white w-full ">
            <div className="h-20 w-20 overflow-hidden bg-white rounded-full shadow-md ">
              <Image
                src={modal.image}
                alt="hotel"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col  items-center text-sm justify-center">
              <h3>{modal.title}</h3>
              <p>{modal.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewSectionHero4;
