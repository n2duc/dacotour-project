import Image from "next/image"

const TripadvisorSection = () => {
  return (
    <section className="bg-white">
      <div className="w-full py-10 bg-primary text-white text-center">
        <h2 className="text-[32px] font-bold uppercase">Khách hàng đánh giá</h2>
        <p className="text-base">Những đánh giá của khách hàng tham gia, trải nghiệm các tour Đà Nẵng tại Dacotours</p>
      </div>
      <div className="max-container py-7">
        <Image src="/tripadvisor-logo.png" height={104} width={153} alt="tripadvisor logo" className="mx-auto" />
        <div className="flex items-center justify-between mt-8">
          <CardReview />
          <CardReview />
          <CardReview />
        </div>
      </div>
    </section>
  )
}

const CardReview = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute rounded-md w-[340px] h-[150px] bg-primary z-10"></div>
      <div className="bg-white w-80 rounded-2xl border border-gray-plate py-5 px-6 flex flex-col items-start z-50">
        <p className="font-bold text-base text-black mb-2">Dang Khoa FC</p>
        <div className="flex items-center gap-1 mb-6">
          <span className="block w-5 h-5 rounded-full bg-primary" />
          <span className="block w-5 h-5 rounded-full bg-primary" />
          <span className="block w-5 h-5 rounded-full bg-primary" />
          <span className="block w-5 h-5 rounded-full bg-primary" />
          <span className="block w-5 h-5 rounded-full bg-primary" />
        </div>
        <p className="text-sm text-black">
          Vị trí này cách đà nẵng tầm 26km khoảng 50 phút đi đến.Nó thật tuyệt vời với những cảnh quan thiên nhiên rất đẹp .Ngồi trên cáp treo ta có thể nhìn thấy toàn cảnh núi bà nà. Nếu đến đà nẵng bạn nên đến đây để tham quan
        </p>
      </div>
    </div>
  )
}

export default TripadvisorSection