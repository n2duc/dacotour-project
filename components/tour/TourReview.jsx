import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

const TourReview = () => {
  return (
    <div className="py-8 pb-10 border-gray-200 scroll-mt-28" id="review">
      <h4 className="text-2xl font-bold text-black mb-6 capitalize">Reviews</h4>
      <div className="w-full flex gap-8">
        <Link href="https://www.tripadvisor.com.vn/Attraction_Review-g298085-d6974493-Reviews-Dacotours-Da_Nang.html" target="_blank">
          <Button size="lg">Read More</Button>
        </Link>
        <div className="flex flex-col gap-3">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  )
}

const ReviewCard = () => {
  return (
    <div className="py-6 border-t border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <div className="relative h-8 w-8 rounded-full overflow-hidden">
          <Image src="/card-forest.png" alt="avatar" fill objectFit='cover' />
        </div>
        <div className="max-w-full">
          <Link href="https://www.tripadvisor.com.vn/Profile/Seaside20290253803" className="font-semibold text-base">Rentalcar Da Nang</Link>
          <div className="font-normal text-xs">
            <span>Da Nang, Viet Nam</span>
            <span>2 đóng góp</span>
          </div>
        </div>
      </div>
      <div className="">
        <svg className="text-secondary" fill='currentColor' viewBox="0 0 128 24" width="88" height="16" aria-labelledby=":lithium-rt:"><title id=":lithium-rt:">5,0 trên 5 bong bóng</title><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform=""></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(104 0)"></path></svg>
      </div>
      <div className="mt-3">
        <Link className="font-bold text-sm hover:underline" href="https://www.tripadvisor.com.vn/ShowUserReviews-g298085-d6974493-r940492511-Dacotours-Da_Nang.html">Review những chuyến đi cùng khách hàng tại bà nà hills</Link>
      </div>
      <div className="my-2">thg 2 năm 2024 • Doanh nghiệp</div>
      <p className="mb-3">Một trải nghiệm tuỵêt vời. Bạn hướng dẫn viên Thong vô cùng thân thiện và nhiệt tình. Phong cảnh rất đẹp 🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰🥰.</p>
      <p>Đánh giá về: Full Day Golden Bridge and Ba Na Hills Small Group Tour</p>
      <div className="text-xs font-normal mt-2">
        <p>Đã viết vào 21 tháng 2, 2024</p>
        <p>Đánh giá này là ý kiến chủ quan của thành viên Tripadvisor chứ không phải của Tripadvisor LLC. Tripadvisor thực hiện kiểm tra đánh giá.</p>
      </div>
    </div>
  )
}

export default TourReview