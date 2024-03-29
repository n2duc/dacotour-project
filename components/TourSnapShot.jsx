import { Clock3, Users, CarFront, Bookmark } from "lucide-react";

const TourSnapShot = () => {
  return (
    <div className="py-6 border-y border-gray-200">
      <h4 className="text-2xl font-bold text-black mb-6">Tour snapshot</h4>
      <div className="flex justify-between">
        <Item title="Tour duration" data="8 hours">
          <Clock3 size={24} />
        </Item>
        <Item title="Max passengers" data="30 people">
          <Users size={24} />
        </Item>
        <Item title="Start from" data="Ha Noi">
          <CarFront size={24} />
        </Item>
        <Item title="Type tour" data="Daily">
          <Bookmark size={24} />
        </Item>
      </div>
    </div>
  );
};

const Item = ({ title, data, children }) => {
  return (
    <div className="flex items-center gap-3 text-secondary">
      {children}
      <div className="flex flex-col gap-0 text-sm">
        <p className="text-black font-medium">{title}</p>
        <p className="">{data}</p>
      </div>
    </div>
  );
};

export default TourSnapShot;
