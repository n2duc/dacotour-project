import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Image from "next/image";
import Link from "next/link";

import Heading from "../common/Heading"
import { Star } from "lucide-react";
import { Button } from "../ui/button";

const tours = [
  {
    id: 1,
    contents: {
      image: "/image-resort.png",
      title: "Tour Cù Lao Chàm Lặn Bình Dưỡng Khí",
      rate: "9.5",
      reviews: "69",
    },
    duration: "7-8",
    price: "$299",
  },
  {
    id: 2,
    contents: {
      image: "/image-resort.png",
      title: "Hiking Adventure in the Rockies",
      rate: "9.2",
      reviews: "85",
    },
    duration: "5-6",
    price: "$249",
  },
  {
    id: 3,
    contents: {
      image: "/image-resort.png",
      title: "Beach Getaway in Maldives",
      rate: "9.8",
      reviews: "92",
    },
    duration: "10-12",
    price: "$599",
  },
  {
    id: 4,
    contents: {
      image: "/image-resort.png",
      title: "City Exploration in Tokyo",
      rate: "9.6",
      reviews: "78",
    },
    duration: "3-4",
    price: "$199",
  }
]

const OtherTourSection = () => {
  return (
    <section className="bg-white w-full">
      <div className="max-container py-8">
        <Heading heading="Other tours" />
        <div className="w-full px-10 py-6 border-2 border-slate-300 rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                {/* <TableHead className="w-[100px]">No.</TableHead> */}
                <TableHead>Tours</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tours.map((tour, index) => (
                <TableRow key={tour.id}>
                  {/* <TableCell className="font-semibold">{index + 1}</TableCell> */}
                  <TableCell>
                    <div className="flex items-start gap-6">
                      <div className="w-[200px] h-[140px]">
                        <Image src={tour.contents.image} alt="tour image" width={200} height={150} className="rounded-md h-[140px] object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xl">{tour.contents.title}</p>
                        <div className="flex items-center gap-x-16">
                          <div className="flex items-center gap-1">
                            <Star size={20} fill="#FFB534" strokeWidth="0" />
                            <span className="font-semibold text-secondary">{tour.contents.rate}/10</span>
                          </div>
                          <p className="text-sm text-slate-600 font-semibold"><span className="text-black text-base">{tour.contents.reviews}</span> Review</p>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold">{tour.duration} hours</TableCell>
                  <TableCell className="text-right font-semibold">{tour.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4} className="text-right font-semibold rounded-b-md">
                  <Link href="/tours">
                    <Button variant="orange" className="rounded-full">View more tours</Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </section>
  )
}

export default OtherTourSection