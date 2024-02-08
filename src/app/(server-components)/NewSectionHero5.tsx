import TouristCard from "@/components/TouristCard";
import React from "react";
import cairo from '@/images/new/cairo.jpg'
import istanbul from '@/images/new/istanbul.jpg'
import abuDhabi from '@/images/new/abuDhabi.jpg'
import doha from '@/images/new/doha.jpg'
import paris from '@/images/new/paris.jpg'
import london from '@/images/new/london.jpg'
import rome from '@/images/new/rome.jpg'
import malysia from '@/images/new/malysia.jpg'
import thailand from '@/images/new/thailand.jpg'
import taef from '@/images/new/taef.jpg'

export interface cardTypeProps{
    id:number,
    title:string,
    desc:string,
    img?:string|{},
    bgImg?:string|{},
}
const DisCards = [
  {
    id: 1,
    title: "باريس",
    desc: "فرنسا - أوروبا",
    img: paris,
    bgImg: paris,
  },
  {
    id: 2,
    title: "لندن",
    desc: "إنجلترا - أوروبا",
    img: london,
    bgImg: london,
  },
  {
    id: 3,
    title: "روما",
    desc: "إايطاليا - أوروبا",
    img: rome,
    bgImg: rome,
  },
  {
    id: 4,
    title: "الطائف",
    desc: "المملكة العربية السعودية -آسيا",
    img: taef,
    bgImg: taef,
  },
  {
    id: 5,
    title: "أبوظبى",
    desc: "الإمارات العربية المتحدة - آسيا",
    img: abuDhabi,
    bgImg: abuDhabi,
  },
  {
    id: 6,
    title: "الدوحة",
    desc: "قطر - آسيا",
    img: doha,
    bgImg: doha,
  },
  {
    id: 7,
    title: "كولالمبور",
    desc: "ماليزيا - آسيا",
    img: malysia,
    bgImg: malysia,
  },
  {
    id: 8,
    title: "القاهرة",
    desc: "جمهورية مصر  العربية - أفريقيا",
    img: cairo,
    bgImg: cairo,
  },
  {
    id: 9,
    title: "بانكوك",
    desc: "تايلند - آسيا",
    img: thailand,
    bgImg: thailand,
  },
  {
    id: 10,
    title: "إسطنبول",
    desc: "تركيا - أوروبا",
    img: istanbul,
    bgImg: istanbul,
  },
 
];
const NewSectionHer5 = () => {
  return <section className="flex flex-col items-center justify-center bg-gray-100 px-8 py-6 rounded-lg">
    <h2>وجهات سياحية عالمية</h2>
    <h3>  اكتشف اشهر الوجهات السياحية حول العالم</h3>
    <div className="grid grid-cols-5 gap-4 mt-6 bg-white">


    {
        DisCards?.map((card:cardTypeProps)=>(
            <TouristCard card={card}/>
        ))
        
    }
    </div>
    <div className=" mt-12 flex gap-4 text-white">
      <button className="px-6 py-1 bg-blue-500 rounded-full "> اكتشف المزيد</button>
      <button className="px-6 py-1 bg-orange-500 rounded-full "  >الأكثر زيارة</button>
    </div>
    
  </section>;
};

export default NewSectionHer5;
