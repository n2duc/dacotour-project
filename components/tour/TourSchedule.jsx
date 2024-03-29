import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const schedule = [
  {
    time: "8:00",
    title: "Đón khách",
    description: "Xe & Hướng dẫn viên Dacotours đón tại khách sạn hoặc điểm hẹn, khởi hành tham quan khu du lịch Bà Nà Hills, với khí hậu tuyệt vời 4 mùa trong một ngày.",
  },
  {
    time: "9:00",
    title: "Tham quan Bà Nà Hills",
    description: "Tham quan khu du lịch Bà Nà Hills, tham gia các trò chơi giải trí, thưởng ngoạn cảnh đẹp từ trên cao.",
  },
  {
    time: "12:00",
    title: "Ăn trưa",
    description: "Hướng dẫn viên sẽ đưa quý khách đến nhà hàng ăn trưa, thưởng thức các món ăn đặc sản của Đà Nẵng.",
  },
  {
    time: "13:00",
    title: "Tham quan Đà Nẵng",
    description: "Tham quan các điểm du lịch nổi tiếng của Đà Nẵng như Cầu Rồng, Bãi biển Mỹ Khê, Bà Nà Hills, Ngũ Hành Sơn, Chùa Linh Ứng, Bà Nà Hills.",
  },
  {
    time: "16:00",
    title: "Kết thúc",
    description: "Hướng dẫn viên sẽ đưa quý khách trở về khách sạn hoặc điểm hẹn ban đầu, kết thúc chuyến tham quan.",
  },
]

const TourSchedule = () => {
  return (
    <div className="py-8 border-b border-gray-200" id="schedule">
      <h4 className="text-2xl font-bold text-black mb-6">Schedule</h4>
      <div className="w-full ">
        <Accordion type="single" collapsible className="w-full flex flex-col gap-5">
          {schedule.map((item, index) => (
            <div className="flex items-start w-full gap-5 text-black" key={item.time}>
              <div className="flex flex-shrink-0 items-center justify-center bg-primary w-14 h-14 rounded-full font-bold text-xs">{item.time}</div>
              <AccordionItem value={`item-${index + 1}`} className="w-full border border-slate-300 px-3 rounded-md">
                <AccordionTrigger className="hover:no-underline">{item.title}</AccordionTrigger>
                <AccordionContent>
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default TourSchedule