import { Archivo } from "next/font/google";
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", });

import { MapPinned, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import BreadCrumb from "@/components/BreadCrumb";
import TourSlide from "@/components/tour/TourSlide";
import TourSnapShot from "@/components/tour/TourSnapShot";
import TourOverview from "@/components/tour/TourOverview";
import TourTimeLine from "@/components/tour/TourTimeLine";
import TourFeatures from "@/components/tour/TourFeatures";
import TourNote from "@/components/tour/TourNote";
import TourBooking from "@/components/tour/TourBooking";
import TourReview from "@/components/tour/TourReview";
import getTour from "@/lib/tours/getTour";

export const metadata = {
  title: 'Tour Detail Page',
  description: 'This is a tour page',
};

export default async function TourPage() {
  const res = await getTour("6607b67d5b01e57a68ec14f0");
  const data = res?.data;
  const { timeLine, includeAndNot, note } = data;

  return (
    <div className="flex-grow w-full">
      <div className="max-container">
        <BreadCrumb />
        <div className="py-6">
          <h1 className={`${archivo.variable} text-3xl font-archivo font-bold mb-2`}>Tour Bà Nà Hills</h1>
          <div className="py-1 px-3 flex items-center gap-1 rounded-2xl bg-gray-100 w-fit">
            <MapPinned size={14} />
            <label className="text-xs font-medium text-gray-700">Đà Nẵng, Việt Nam</label>
          </div>
        </div>

        <div className="flex w-full gap-8 py-8">
          <div className="flex-grow">
            <TourSlide />
            <TourSnapShot />
            <TourOverview />
            <TourTimeLine data={timeLine} />
            <TourFeatures data={includeAndNot} />
            <TourNote data={note} />
            <TourBooking />
            <TourReview />
          </div>
          <div className="min-w-[384px] max-w-[25vw]">
            <div className="w-full bg-white border border-gray-200 rounded-xl sticky top-28 shadow-sm">
              <div className="px-6 py-5 border-b border-gray-200 text-lg">
                Price from <span className="font-semibold">$30</span>/adult
              </div>
              <div className="px-6 py-5 flex flex-col items-center gap-4">
                <Button variant="orange" size="lg" className="w-full font-bold">Book Tour</Button>
                <Button variant="secondary" size="lg" className="w-full font-bold">Contact</Button>
                <div className="flex items-center gap-2">
                  <Heart size={16} />
                  <p className="text-sm">94% of travelers recommend this experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};