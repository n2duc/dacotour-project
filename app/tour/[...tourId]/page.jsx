import getTours from "@/lib/tours/getTours";

// async function getToursType({ typeTour }) {
//   const tours = await getTours();
//   return tours.filter((tour) => tour.type === typeTour);
// }

export default async function ToursPage({ params }) {
  // const { typeTour } = params;
  // const tours = getToursType({ typeTour });
  // console.log(tours);
  const tours = await getTours();
  console.log(tours);
  return (
    <div className="">
      <h1>Tour List</h1>
    </div>
  )
}