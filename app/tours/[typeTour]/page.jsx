import BreadCrumb from "@/components/BreadCrumb";
import TourItem from "@/components/tour/TourItem";
import getTours from "@/lib/tours/getTours";
import getTypeTour from "@/lib/tours/getTypeTour";
import { renameTypeTour } from "@/lib/utils";

async function getToursType(typeTour) {
  const tours = await getTours();
  if (!tours) {
    return null;
  }
  // return tours.filter(async (tour) => {
  //   const typeTour = await getTypeTour(tour.idTypeTours)
  //   if (!tour.typeTour.nameTypeTour) {
  //     return typeTour === typeTour;
  //   }
  //   return tour.typeTour.nameTypeTour === typeTour
  // });
  return tours.filter((tour) => tour.typeTour.nameTypeTour === typeTour);
}

export default async function ToursPage({ params }) {
  const { typeTour } = params;

  const tours = await getToursType(typeTour);

  return (
    <div className="max-container">
      <BreadCrumb lastName={renameTypeTour(typeTour)} />
      <h1 className="text-center my-8 text-2xl font-bold text-gray-800">{renameTypeTour(typeTour)}</h1>
      {!tours?.length ? (
        <div>Tours is empty</div>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 pt-5">
          {tours.map((tour, index) => (
            <TourItem
              href={tour._id}
              key={tour._id}
              images={tour.banner}
              duration={tour.totalTime}
              price={tour.price}
              title={tour.nameTour}
              typeTour={tour.typeTour.nameTypeTour}
            />
          ))}
        </div>
      )}
    </div>
  )
}