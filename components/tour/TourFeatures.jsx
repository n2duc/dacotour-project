import { Check, X } from "lucide-react";
import TourContentWrap from "./TourContentWrap";

const TourFeatures = () => {
  return (
    <TourContentWrap id="features" title="Features">
      <div className="flex items-start gap-7 w-full">
        <div className="flex flex-col text-secondary max-w-[350px] w-full gap-y-4">
          <IncludeItem text="Xe du lịch điều hòa, đưa đón tại trung tâm thành phố Đà Nẵng" />
          <IncludeItem text="Ăn trưa tại nhà hàng ở Hội An" />
          <IncludeItem text="Vé tham quan tuyến điểm theo chương trình" />
          <IncludeItem text="Nước suối: 01 đơn vị/ khách" />
          <IncludeItem text="Bảo hiểm du lịch" />
        </div>
        <div className="flex flex-col text-red-500 gap-y-4">
          <NotIncludeItem text="Thuế VAT" />
          <NotIncludeItem text="Chi phí cá nhân phát sinh ngoài chương trình" />
        </div>
      </div>
    </TourContentWrap>
  )
}

const IncludeItem = ({ text }) => {
  return (
    <div className="flex items-center gap-5">
      <Check size={20} className="flex-shrink-0" />
      <span className="text-black font-medium">{text}</span>
    </div>
  )
}

const NotIncludeItem = ({ text }) => {
  return (
    <div className="flex items-center gap-5">
      <X size={20} className="flex-shrink-0" />
      <span className="text-black font-medium">{text}</span>
    </div>
  )
}

export default TourFeatures