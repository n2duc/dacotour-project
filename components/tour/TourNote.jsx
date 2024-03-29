import TourContentWrap from './TourContentWrap'
import { Dot } from 'lucide-react';

const content = [
  "Giá tour các ngày lễ Tết: 23, 26, 27, 28, 29/ 01/ 2020 phụ thu 100.000 VNĐ",
  "Vui lòng cung cấp đầy đủ thông tin cá nhân và danh sách đoàn để đặt dịch vụ",
  "Trong vòng 2 giờ sau khi đặt tour, nếu quý khách không nhận được email xác nhận dịch vụ hoặc không thể hoàn tất việc đặt tour trên website, vui lòng liên hệ email: info@dacotours.com để được hỗ trợ trực tiếp.",
  "Chương trình tour có thể thay đổi theo tình hình thời tiết hoặc yêu cầu của đoàn để đảm bảo đủ lịch trình tham quan."
]

const TourNote = () => {
  return (
    <TourContentWrap title="Note">
      <div className="flex flex-col gap-3">
        {content.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <Dot size={24} className="flex-shrink-0 text-secondary" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </TourContentWrap>
  )
}

export default TourNote