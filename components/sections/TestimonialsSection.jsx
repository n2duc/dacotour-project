import { cn } from '@/lib/utils'
import Image from 'next/image'

const TestimonialContent = [
  {
    id: "01",
    title: "top tripadvisor",
    description: "Lorem ipsum is placeholder text commonly used in the graphic",
    image: "/tripadvisor-logo.png",
    color: "FFC452"
  },
  {
    id: "02",
    title: "google maps",
    description: "Lorem ipsum is placeholder text commonly used in the graphic",
    image: "/maps-logo.png",
    color: "51829D"
  },
  {
    id: "03",
    title: "youtube",
    description: "Lorem ipsum is placeholder text commonly used in the graphic",
    image: "/youtube-logo.png",
    color: "F95962"
  },
  {
    id: "04",
    title: "review",
    description: "Lorem ipsum is placeholder text commonly used in the graphic",
    image: "/review-image.png",
    color: "73D883"
  }
]

const TestimonialsSection = () => {
  return (
    <section className="bg-[#D9E8D5] py-12 w-full" id="testimonials">
      <div className="max-container flex gap-8">
        <div className="bg-primary py-9 px-14 flex flex-col items-center justify-between rounded relative">
          <p className="-ml-24 text-[40px] text-white uppercase font-bold leading-[42px] z-30">Number <span className="text-[64px] text-yellow-400 font-extrabold text-stroke">1</span></p>
          <p className="text-[40px] text-secondary uppercase font-bold text-stroke ml-24 leading-normal z-30">Tripadvisor</p>
          <div className="bg-white py-5 px-14 rounded-3xl w-max z-30">
            <Image src="/tripadvisor-logo.png" alt='logo' width={150} height={100} />
          </div>
          <div className="w-full h-full z-10">
            <Image src="/layer.png" alt='layer' className='absolute top-0 left-0 rounded' fill />
          </div>
        </div>
        <div className="flex flex-col items-center flex-1">
          <h2 className="text-4xl font-semibold text-black">and We recomended by</h2>
          <div className="flex justify-between w-full">
            {TestimonialContent.map((item, index) => (
              <ItemTestimonial key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const ItemTestimonial = ({ id, title, description, image, color }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="translate-y-5 z-10 text-8xl font-bold" style={{ color: `#${color}` }}>{id}</span>
      <div className="w-[160px] h-full bg-white py-4 px-3 border-t-2 border-slate-400 flex flex-col items-center text-center gap-3 rounded-b-sm z-20">
        <p className="font-semibold text-sm uppercase">{title}</p>
        <p className="text-xs">{description}</p>
        <div className="h-14 w-14 relative">
          <Image src={image} alt="tripadvisor" fill className='object-contain' />
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection