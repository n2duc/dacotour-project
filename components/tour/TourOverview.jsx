'use client';

import { useState } from "react";
import { Button } from "../ui/button";

const TourOverview = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="py-6 border-b border-gray-200 scroll-mt-32" id="overview">
      <h4 className="text-2xl font-bold text-black mb-6">Overview</h4>
      <div className={`relative mb-6 ${showMore ? "h-max" : "h-32"} overflow-hidden transition ease-in-out`}>
        <p className="text-base font-medium">
          Tour Bà Nà 1 ngày khám phá địa điểm du lịch đẹp nhất ở Đà Nẵng mà bạn
          không thể bỏ qua khi đi du lịch Đà Nẵng. Bà Nà Hill nổi tiếng bởi hội
          tụ nhiều phong cảnh ngoạn mục, các công trình kiến trúc độc đáo mang
          phong cách châu Âu.  Đặc biệt tại đây bạn có cơ hội trải nghiệm một
          lúc sự luân phiên 4 mùa của năm chỉ trong một ngày.
        </p>
        <p className="text-base font-medium">
          Tour Bà Nà 1 ngày khám phá địa điểm du lịch đẹp nhất ở Đà Nẵng mà bạn
          không thể bỏ qua khi đi du lịch Đà Nẵng. Bà Nà Hill nổi tiếng bởi hội
          tụ nhiều phong cảnh ngoạn mục, các công trình kiến trúc độc đáo mang
          phong cách châu Âu.  Đặc biệt tại đây bạn có cơ hội trải nghiệm một
          lúc sự luân phiên 4 mùa của năm chỉ trong một ngày.
        </p>
        <p className="text-base font-medium">
          Tour Bà Nà 1 ngày khám phá địa điểm du lịch đẹp nhất ở Đà Nẵng mà bạn
          không thể bỏ qua khi đi du lịch Đà Nẵng. Bà Nà Hill nổi tiếng bởi hội
          tụ nhiều phong cảnh ngoạn mục, các công trình kiến trúc độc đáo mang
          phong cách châu Âu.  Đặc biệt tại đây bạn có cơ hội trải nghiệm một
          lúc sự luân phiên 4 mùa của năm chỉ trong một ngày.
        </p>
        {!showMore && (
          <div className="absolute bottom-0 left-0 w-full h-9 bg-gradient-to-t from-white"></div>
        )}
      </div>
      <Button onClick={() => setShowMore(!showMore)}>{showMore ? "View Less" : "View More"}</Button>
    </div>
  );
};

export default TourOverview;
