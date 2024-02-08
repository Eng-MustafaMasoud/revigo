import { cardTypeProps } from '@/app/(server-components)/NewSectionHero5'
import Image from 'next/image'
import React from 'react'



const TouristCard = ({card}:cardTypeProps|any) => {  
    

  return (
    <div className='shadow-lg pb-6 rounded-xl '>
        <div className="flex-1 rounded-t-lg">
            <Image src={card.bgImg} alt={card.title} className='object-cover object-top h-36 rounded-t-lg'/>
        </div>
        <div className=" flex flex-col flex-1 justify-center w-full items-center bg-white ">
            <div className="w-14 h-14 rounded-full bg-white mt-[-1rem]">
            <Image src={card.img} alt={card.title} className='w-full h-full rounded-full p-2'/>

            </div>
            <h4>{card.title}</h4>
            <h5>{card.desc}</h5>
        </div>
    </div>
  )
}

export default TouristCard