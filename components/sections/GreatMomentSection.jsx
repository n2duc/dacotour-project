import Heading from "../common/Heading";
import Image from "next/image";

const GreatMomentSection = () => {
  return (
    <section className="bg-white w-full py-8 pb-16 scroll-mt-20" id="great-moment">
      <div className="">
        <Heading heading="Greate Moment With Dacotours" />
        <div className="overflow-hidden">
          <div className="overflow-hidden whitespace-nowrap select-none w-max imageList">
            <div className="image-slide inline-flex gap-8">
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
            </div>
            <div className="image-slide inline-flex gap-8 ml-8">
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
            </div>
          </div>
        </div>
        <div className="max-container bg-primary py-4 my-8">
          <p className="max-w-[600px] text-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ullamco</p>
        </div>
        <div className="overflow-hidden slide-image-sencond">
          <div className="overflow-hidden whitespace-nowrap select-none w-max imageList">
            <div className="image-slide inline-flex gap-8">
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
            </div>
            <div className="image-slide inline-flex gap-8 ml-8">
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
              <Image src="/card-forest.png" alt="image" width={200} height={200} className="rounded-xl object-cover h-[150px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GreatMomentSection