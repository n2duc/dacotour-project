'use client';

import Heading from '../common/Heading';
import TourItem from '../tour/TourItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testData = [
  {
    id: 1,
    images: [
      "/card-forest.png",
      "/card-forest.png",
      "/card-forest.png",
      "/card-forest.png",
    ],
    location: "Đà Nẵng",
    title: "Tour Cù Lao Chàm Lặn Bình Dưỡng Khí",
    duration: "7-8",
    price: "670.000đ"
  },
  {
    id: 2,
    images: [
      "/card-forest.png",
      "/card-forest.png",
      "/card-forest.png",
      "/card-forest.png",
    ],
    location: "Đà Nẵng",
    title: "Tour Cù Lao Chàm Lặn Bình Dưỡng Khí",
    duration: "7-8",
    price: "670.000đ"
  },
  {
    id: 3,
    images: [
      "/card-forest.png",
      "/card-forest.png",
      "/card-forest.png",
      "/card-forest.png",
    ],
    location: "Đà Nẵng",
    title: "Tour Cù Lao Chàm Lặn Bình Dưỡng Khí",
    duration: "7-8",
    price: "670.000đ"
  },
  {
    id: 4,
    images: [
      "/card-forest.png",
      "/card-forest.png",
      "/card-forest.png",
      "/card-forest.png",
    ],
    location: "Đà Nẵng",
    title: "Tour Cù Lao Chàm Lặn Bình Dưỡng Khí",
    duration: "7-8",
    price: "670.000đ"
  },
  {
    id: 5,
    images: [
      "/card-forest.png",
      "/card-forest.png",
      "/card-forest.png",
      "/card-forest.png",
    ],
    location: "Đà Nẵng",
    title: "Tour Cù Lao Chàm Lặn Bình Dưỡng Khí",
    duration: "7-8",
    price: "670.000đ"
  }
]

const TourSection = () => {
  return (
    <section className="bg-white">
      <div className="max-container py-9">
        <Heading heading="TOP SELLING DAILY GROUP TOUR" />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          speed={2000}
          pagination={{
            el: '.swiper-custom-pagination',
          }}
          modules={[Autoplay, Pagination]}
          className="w-full flex justify-between mySwiper"
        >
          {testData.map((tour) => (
            <SwiperSlide key={tour.id}>
              <TourItem
                title={tour.title}
                images={tour.images}
                duration={tour.duration}
                location={tour.location}
                price={tour.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-custom-pagination flex items-center justify-center gap-2 mt-4"/>
      </div>
    </section>
  )
}

export default TourSection