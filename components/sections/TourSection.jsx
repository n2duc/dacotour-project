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
    href: "/",
    images: [
      "card-forest.png",
      "card-forest.png",
      "card-forest.png",
      "card-forest.png",
    ],
    location: "Đà Nẵng",
    title: "Tour Cù Lao Chàm Lặn Bình Dưỡng Khí",
    duration: "7-8 days",
    price: "299",
    typeTour: "daily-group-central"
  },
  {
    id: 2,
    href: "/",
    images: [
      "card-forest.png",
      "card-forest.png",
      "card-forest.png",
      "card-forest.png",
    ],
    location: "Đà Nẵng",
    title: "Tour Cù Lao Chàm Lặn Bình Dưỡng Khí",
    duration: "7-8 days",
    price: "299",
    typeTour: "daily-group-central"
  },
  {
    id: 3,
    href: "/",
    images: [
      "card-forest.png",
      "card-forest.png",
      "card-forest.png",
      "card-forest.png",
    ],
    location: "Đà Nẵng",
    title: "Tour Cù Lao Chàm Lặn Bình Dưỡng Khí",
    duration: "7-8 days",
    price: "299",
    typeTour: "daily-group-central"
  },
  {
    id: 4,
    href: "/",
    images: [
      "card-forest.png",
      "card-forest.png",
      "card-forest.png",
      "card-forest.png",
    ],
    location: "Đà Nẵng",
    title: "Tour Cù Lao Chàm Lặn Bình Dưỡng Khí",
    duration: "7-8 days",
    price: "299",
    typeTour: "daily-group-central"
  },
  {
    id: 5,
    href: "/",
    images: [
      "card-forest.png",
      "card-forest.png",
      "card-forest.png",
      "card-forest.png",
    ],
    location: "Đà Nẵng",
    title: "Tour Cù Lao Chàm Lặn Bình Dưỡng Khí",
    duration: "7-8 days",
    price: "299",
    typeTour: "daily-group-central"
  }
]

const TourSection = ({ heading }) => {
  return (
    <section className="bg-white">
      <div className="max-container py-9">
        <Heading heading={heading} />
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
                recommended
                title={tour.title}
                images={tour.images}
                duration={tour.duration}
                location={tour.location}
                price={tour.price}
                typeTour={tour.typeTour}
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