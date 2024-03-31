'use client';

import Image from "next/image";
import Link from "next/link";

import { MapPin, Mail, Phone, User, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// const Navbar = () => {
//   return (
//     <header className="sticky top-0 left-0 w-full shadow z-[9999]">
//       {/* Topbar */}
//       <div className="bg-primary py-2 w-full">
//         <div className="max-container flex items-center justify-between">
//           <div className="flex items-center gap-6">
//             <div className="flex items-center text-black gap-1">
//               <MapPin size={20} />
//               <Link href="https://maps.app.goo.gl/1fFxa5WAzv5CqgvV8" target="_blank" className="text-xs">K142/23 Nguyễn Duy Hiệu, An Hải Đông, Sơn Trà, Đà Nẵng.</Link>
//             </div>
//             <div className="flex items-center text-black gap-1">
//               <Mail size={20} />
//               <a href="mailto:info@dacotours.com" className="text-xs">info@dacotours.com</a>
//             </div>
//             <div className="flex items-center text-black gap-1">
//               <Phone size={20} />
//               <a href="tel:+84914136151" className="text-xs">0914.136.151</a>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <User size={20} />
//             <div className="w-[2px] h-4 bg-black"></div>
//             <Globe size={20} />
//           </div>
//         </div>
//       </div>

//       {/* Navbar */}
//       <div className=" bg-white">
//         <nav className="max-container flex justify-between items-center w-full relative z-30">
//           <Link href="/">
//             <Image src="/logo-dacotours.png" alt="logo dacotours" width={180} height={40} />
//           </Link>
//           <div className="flex items-center h-full">
//             <div className="relative group p-5 text-black hover:text-primary cursor-pointer flex">
//               <a className="group text-base font-medium">Tours</a>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" ><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
//               <div className="opacity-0 invisible -translate-y-2 absolute top-full left-0 px-4 py-2 rounded-sm text-black bg-white min-w-52 flex flex-col transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 shadow-sm">
//                 <a href="" className="dropdown-item block">Tour ngắn ngày</a>
//                 <a href="" className="dropdown-item block">Tour dài ngày</a>
//                 <a href="" className="dropdown-item block">Tour không có đường về</a>
//               </div>
//             </div>
//             <a className="text-black text-base font-medium p-5 hover:text-primary cursor-pointer">Điểm đến</a>
//             <a className="text-black text-base font-medium p-5 hover:text-primary cursor-pointer">Dịch vụ</a>
//             <a className="text-black text-base font-medium p-5 hover:text-primary cursor-pointer">Kinh nghiệm du lịch</a>
//             <Link href="/blog" className="text-black text-base font-medium p-5 hover:text-primary cursor-pointer">Blog</Link>
//             <Link href="/about-us" className="text-black text-base font-medium p-5 hover:text-primary cursor-pointer">Giới thiệu</Link>
//           </div>
//         </nav>
//       </div>
//     </header>
//   )
// }

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 w-full border-b border-gray-200 z-[200]">
      {/* Topbar */}
      <div className="bg-primary py-2 w-full">
        <div className="max-container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center text-black gap-1">
              <MapPin size={20} />
              <Link href="https://maps.app.goo.gl/1fFxa5WAzv5CqgvV8" target="_blank" className="text-xs">K142/23 Nguyễn Duy Hiệu, An Hải Đông, Sơn Trà, Đà Nẵng.</Link>
            </div>
            <div className="flex items-center text-black gap-1">
              <Mail size={20} />
              <a href="mailto:info@dacotours.com" className="text-xs">info@dacotours.com</a>
            </div>
            <div className="flex items-center text-black gap-1">
              <Phone size={20} />
              <a href="tel:+84914136151" className="text-xs">0914.136.151</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User size={20} />
            <div className="w-[2px] h-4 bg-black"></div>
            <Globe size={20} />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className=" bg-white py-2 pt-3">
        <div className="max-container flex justify-between items-center w-full relative z-30">
          <Link href="/">
            <Image src="/logo-dacotours.png" alt="logo dacotours" width={180} height={40} />
          </Link>
          <div className="flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Daily tours</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex gap-5 p-4 w-[300px]">
                      <div className="flex w-full flex-col">
                        <p className="text-sm font-semibold mb-3 pl-1">Private tours</p>
                        <LinkNavItem title="North" href="/tours/daily-private-north" />
                        <LinkNavItem title="Central" href="/tours/daily-private-central" />
                        <LinkNavItem title="South" href="/tours/daily-private-south" />
                      </div>
                      <div className="flex w-full flex-col">
                        <p className="text-sm font-semibold mb-3 pl-1">Group tours</p>
                        <LinkNavItem title="North" href="/tours/daily-group-north" />
                        <LinkNavItem title="Central" href="/tours/daily-group-central" />
                        <LinkNavItem title="South" href="/tours/daily-group-south" />
                      </div>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Multi-day tours</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex gap-5 p-4 w-[300px]">
                      <div className="flex w-full flex-col">
                        <p className="text-sm font-semibold mb-3 pl-1">Private tours</p>
                        <LinkNavItem title="North" href="/tours/multi-private-north" />
                        <LinkNavItem title="Central" href="/tours/multi-private-central" />
                        <LinkNavItem title="South" href="/tours/multi-private-south" />
                      </div>
                      <div className="flex w-full flex-col">
                        <p className="text-sm font-semibold mb-3 pl-1">Group tours</p>
                        <LinkNavItem title="North" href="/tours/multi-group-north" />
                        <LinkNavItem title="Central" href="/tours/multi-group-central" />
                        <LinkNavItem title="South" href="/tours/multi-group-south" />
                      </div>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/destination" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Destination
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/custom-trips" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Custom trips
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Other services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col gap-1 p-4 w-[300px]">
                      <LinkNavItem title="Hotel Booking" href="/services/hotel-booking" />
                      <LinkNavItem title="Flight Booking" href="/services/flight-booking" />
                      <LinkNavItem title="Transportation Booking" href="/services/transportation-booking" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>More</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col gap-1 p-4 w-[320px]">
                      <LinkNavItem title="Great moments with travelers" href="#great-moment" />
                      <LinkNavItem title="Testimonials" href="#testimonials" />
                      <LinkNavItem title="Blog" href="/blog" />
                      <LinkNavItem title="FAQ" href="#" />
                      <LinkNavItem title="Contact us" href="#contact" />
                      <LinkNavItem title="Payment Method for tours" href="/payment-method" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuViewport className="right-0" />
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  )
}

const LinkNavItem = ({ className, title, href, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" {...props}>
          <p className="text-sm font-medium leading-none">{title}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default Navbar