import getTours from "@/lib/tours/getTours";
import Link from "next/link";

async function getToursType(typeTour) {
  const tours = await getTours();
  return tours.filter((tour) => tour.typeTour.nameTypeTour === typeTour);
}

export default async function ToursPage({ params }) {
  const { typeTour } = params;
  // const tours = await getTours()
  const tours = await getToursType(typeTour);
  console.log(typeTour);
  console.log(tours);
  return (
    <div className="max-container">
      {/* Viết hàm xử lý tên loại tour để render ra giao diện daily-group-south => Daily Tours Group - South */}
      <h1>Tour List of {typeTour.split("-").join(" ").toUpperCase()}</h1>
      {!tours?.length ? (
        <div>Tours is empty</div>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <Link key={index} href={`/tour/${tour._id}`} className="p-5 border border-gray-200 rounded-md">
              {tour.nameTour}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}