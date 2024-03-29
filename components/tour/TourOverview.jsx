import { Button } from "../ui/button";

const TourOverview = () => {
  return (
    <div className="py-6 border-b border-gray-200">
      <h4 className="text-2xl font-bold text-black mb-6">Overview</h4>
      <div className="content mb-6">
        <p className="text-base font-medium">
          Tour Bà Nà 1 ngày khám phá địa điểm du lịch đẹp nhất ở Đà Nẵng mà bạn
          không thể bỏ qua khi đi du lịch Đà Nẵng. Bà Nà Hill nổi tiếng bởi hội
          tụ nhiều phong cảnh ngoạn mục, các công trình kiến trúc độc đáo mang
          phong cách châu Âu.  Đặc biệt tại đây bạn có cơ hội trải nghiệm một
          lúc sự luân phiên 4 mùa của năm chỉ trong một ngày.
        </p>
      </div>
      <Button>See more</Button>
    </div>
  );
};

export default TourOverview;
