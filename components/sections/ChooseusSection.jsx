import { GiftIcon } from "@heroicons/react/24/solid";

const ChooseusSection = () => {
  return (
    <section className="bg-primary w-full">
      <div className="max-container py-16 text-white text-center">
        <h2 className="text-[40px] uppercase font-bold">Tại sao nên chọn chúng tôi?</h2>
        <p className="text-base max-w-[720px] mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum earum praesentium eum quia tempora impedit neque adipisci vero ullam corporis, odio quisquam sit?</p>
        <div className="flex items-center mt-14 w-full justify-between">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </section>
  )
}

const CardItem = () => {
  return (
    <div className="max-w-[220px] w-full rounded-[20px] bg-white text-primary px-6 py-7 flex flex-col items-center gap-[14px]">
      <GiftIcon className="w-20 h-20 p-4 bg-gray-50 rounded-xl" />
      <p className="font-bold text-xl">Luôn có mức giá tốt</p>
      <p className="text-sm">Dacotours luôn đảm bảo mức giá khi tới khách hàng là cạnh tranh nhất trên thị trường.</p>
    </div>
  )
}

export default ChooseusSection