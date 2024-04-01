import getTour from "@/lib/tours/getTour";

import { Archivo } from "next/font/google";
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", });

import { MapPinned, Heart } from 'lucide-react';
import BreadCrumb from "@/components/BreadCrumb";
import TourSlide from '@/components/tour/TourSlide';
import TourSnapShot from '@/components/tour/TourSnapShot';
import TourOverview from '@/components/tour/TourOverview';
import TourTimeLine from '@/components/tour/TourTimeLine';
import TourFeatures from '@/components/tour/TourFeatures';
import TourNote from '@/components/tour/TourNote';
import TourBooking from '@/components/tour/TourBooking';
import TourReview from '@/components/tour/TourReview';
import { Button } from '@/components/ui/button';
import TourHeader from "@/components/tour/TourHeader";

async function getTourFromParams(params) {
  const tour = await getTour(params?.tourId);

  if (!tour || !tour.data) {
    notFound();
  }

  return tour.data;
}

export async function generateMetadata({ params }) {
  const data = await getTourFromParams(params);
  const { nameTour } = data;
  return {
    title: nameTour,
  };
}

export default async function ToursPage({ params }) {
  const tour = await getTourFromParams(params);

  if (!tour) {
    notFound();
  }

  const isDetailTour = tour.typeTour.typePrice === "Detail";

  const { timeLine, includeAndNot, note, totalTime, maxCustomers } = tour;

  return (
    <div className="flex-grow w-full">
      <div className="max-container">
        <BreadCrumb lastName={tour.nameTour} />
        <div className="pt-10">
          <h1 className={`${archivo.variable} text-3xl font-archivo font-bold mb-2`}>{tour.nameTour}</h1>
          <div className="py-1 px-3 flex items-center gap-1 rounded-2xl bg-gray-100 w-fit">
            <MapPinned size={14} />
            <label className="text-xs font-medium text-gray-700">Đà Nẵng, Việt Nam</label>
          </div>
        </div>

        <div className="flex w-full gap-8 py-8">
          <div className="flex-grow">
            <TourSlide />
            <div className="w-full">
              <TourHeader />
              <TourSnapShot duration={totalTime} groupSize={maxCustomers} />
              <TourOverview />
              <TourTimeLine data={timeLine} />
              <TourFeatures data={includeAndNot} />
              <TourNote data={note} />
              {isDetailTour && <TourBooking />}
              <TourReview />
            </div>
          </div>
          <div className="min-w-[384px] max-w-[25vw]">
            <div className="w-full bg-white border border-gray-200 rounded-xl sticky top-28 shadow-sm">
              {isDetailTour && (
                <div className="px-6 py-5 border-b border-gray-200 text-lg">
                  Price from <span className="font-semibold">${tour?.price}</span>/adult
                </div>
              )}
              <div className="px-6 py-5 flex flex-col items-center gap-4">
                {isDetailTour && <Button variant="orange" size="lg" className="w-full font-bold">Book Tour</Button>}
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
  )
}