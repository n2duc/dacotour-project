'use client'

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

const images = [
  { src: '/card-forest.png', alt: 'First' },
  { src: '/image-resort.png', alt: 'Second' },
  { src: '/card-forest.png', alt: 'Third' },
  { src: '/image-resort.png', alt: 'Fourth' }
]

const TourSlide = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full flex h-[460px] justify-between mb-8">
      <Swiper
        loop={true}
        spaceBetween={0}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[FreeMode, Thumbs]}
        className='h-full w-[640px] rounded-lg relative mx-0'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                className='block h-full w-full'
                layout="fill" objectFit="cover"
              />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        direction="vertical"
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className='thumbs h-full w-32'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <button className='flex h-[106px] w-full items-center justify-center relative'>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TourSlide