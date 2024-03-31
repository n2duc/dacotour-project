import { Check, X } from "lucide-react";
import TourContentWrap from "./TourContentWrap";

const TourFeatures = ({ data }) => {
  const { include, notInclude } = data;
  return (
    <TourContentWrap id="features" title="Features">
      <div className="flex items-start gap-7 w-full">
        <div className="flex flex-col text-secondary max-w-[350px] w-full gap-y-4">
          {include.map((item, index) => (
            <IncludeItem key={index} text={item} />
          ))}
        </div>
        <div className="flex flex-col text-red-500 gap-y-4">
          {notInclude.map((item, index) => (
            <NotIncludeItem key={index} text={item} />
          ))}
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