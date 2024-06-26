export const API_URL = process.env.SERVER_BASE;
export const BLOGS_ROUTES = `${API_URL}/blogs`;
export const TOURS_ROUTES = `${API_URL}/tours`;
export const TYPE_TOURS_ROUTES = `${API_URL}/type-tours`;
export const SERVICES_ROUTES = `${API_URL}/send-emails/request-from-user`;

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Tour' },
  { href: '/', key: 'how_hilink_work', label: 'Điểm đến' },
  { href: '/', key: 'services', label: 'Dịch vụ' },
  { href: '/', key: 'pricing ', label: 'Kinh nghiệm du lịch ' },
  { href: '/about-us', key: 'about_us', label: 'Giới thiệu' },
];

export const TYPE_TOURS_LINK = {
  daily: [
    { title: 'North', href: '/tours/daily-private-north' },
    { title: 'Central', href: '/tours/daily-private-central' },
    { title: 'South', href: '/tours/daily-private-south' },
  ],
  multiDay: [

  ]
}

export const MORE_NAV_LINKS = [
  { href: '/#great-moment', title: 'Great moments with travelers' },
  { href: '/#testimonials', title: 'Testimonials' },
  { href: '/blog', title: 'Blog' },
  { href: '/', title: 'FAQ' },
  { href: '/#contact', title: 'Contact us' },
  { href: '/', title: 'Payment Method for tours' },
]

// FOOTER
export const FOOTER_CONTENTS = [
  {
    title: 'Hỗ trợ khách hàng',
    links: [
      { href: '/', label: 'Câu hỏi thường gặp' },
      { href: '/', label: 'Du lịch có trách nhiệm' },
      { href: '/', label: 'Chính sách hủy Tour' },
      { href: '/', label: 'Chính sách riêng tư' },
      { href: '/', label: 'Tuyển dụng' },
    ]
  },
  {
    title: 'Tour du lịch',
    links: [
      { href: '/', label: 'Tour Bà Nà Hills' },
      { href: '/', label: 'Tour Cù Lam Chàm' },
      { href: '/', label: 'Tour Thiên Nhiên' },
      { href: '/', label: 'Tour Cao Cấp' },
      { href: '/', label: 'Tour Huế 1 Ngày' },
    ]
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Liên hệ',
  links: [
    { label: 'Hotline', value: '0914.136.151' },
    { label: 'Email', value: 'info@dacotour.com' },
    { label: 'Address', value: 'K142/23 Nguyễn Duy Hiệu, An Hải Đông, Sơn Trà, Đà Nẵng.' },
  ]
}