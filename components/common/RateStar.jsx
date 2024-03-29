import { StarIcon } from "@heroicons/react/24/outline"; 
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";

const RateStar = ({ rate, amount }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center text-orange-plate">
        {Array.from({ length: 5 }, (_, index) => {
          if (index < rate) {
            return <StarSolid key={index} className="w-4 h-4" />;
          }
          return <StarIcon key={index} className="w-4 h-4" />;
        })}
      </div>
      <p className="text-sm text-black font-semibold">{amount} <span className="text-xs text-grey-plate">{amount > 1 ? "Reviews" : "Review"}</span></p>
    </div>
  )
}

export default RateStar