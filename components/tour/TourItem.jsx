'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Star, Heart, Castle, History, BadgeCheck } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import { Button } from '../ui/button';

const TourItem = ({ images, title, duration, price, href, typeTour, recommended = false }) => {
  const type = typeTour.split("-")[0];
  const nameTypeOfTour = type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <div className="w-[380px] rounded-xl bg-white border border-gray-plate relative">
      <button className="absolute top-5 right-5 z-40 group bg-white p-2 rounded-full">
        <Heart className="w-6 h-6 text-black group-hover:text-red-500" fill='white' />
      </button>
      {recommended && (
        <div className="absolute flex items-center justify-center bg-[url('/tag.png')] w-[110px] h-[30px] bg-no-repeat bg-cover -left-2 top-5 z-40">
          <p className="text-white font-bold text-[10px] mr-3">Recommended</p>
        </div>
      )}
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2000}
        // modules={[Autoplay]}
        className="mySwiper w-full h-[252px] overflow-hidden relative rounded-t-xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={`/${image}`} width={380} height={252} alt="tour image" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col px-4 py-[14px] gap-[10px]">
        <Link href={`/tour/${href}`} className="text-xl font-semibold text-black">{title}</Link>
        <div className="flex-between">
          <div className="flex items-center gap-1">
            <Star fill='orange' strokeWidth={0} size={20} />
            <span className="font-semibold">9.5/10</span>
          </div>
          <p className="text-sm"><span className="font-bold text-base">56</span> Reviews</p>
        </div>
        <div className="flex-between">
          <div className="flex items-center text-black text-sm gap-1">
            <Castle size={16} />
            <span>{nameTypeOfTour} Tours</span>
          </div>
          <div className="flex items-center text-black text-sm gap-1">
            <History size={16} />
            <span>{duration}</span>
          </div>
        </div>
        <div className="flex items-center text-sm gap-1">
          <BadgeCheck size={20} fill='#F67575' color='white' />
          <p>Recommeded by 100% of travellers</p>
        </div>
        <div className="flex-between pt-3 mt-5 border-t border-slate-300">
          <p className="text-black font-semibold text-lg">from ${price}</p>
          <Button variant="orange" className="rounded-full">Reserve</Button>
        </div>
      </div>
    </div>
  )
}

export default TourItem;