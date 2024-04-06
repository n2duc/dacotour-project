'use client';

import Image from "next/image";
import Link from "next/link";

import { MapPin, Mail, Phone, User, Globe } from "lucide-react"
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
import { MORE_NAV_LINKS } from "@/constants";


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
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Daily tours</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex gap-5 p-4 w-[300px]">
                      <div className="flex w-full flex-col">
                        <NavItemTitle>Private tours</NavItemTitle>
                        <LinkNavItem title="North" href="/tours/daily-private-north" />
                        <LinkNavItem title="Central" href="/tours/daily-private-central" />
                        <LinkNavItem title="South" href="/tours/daily-private-south" />
                      </div>
                      <div className="flex w-full flex-col">
                        <NavItemTitle>Group tours</NavItemTitle>
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
                        <NavItemTitle>Private tours</NavItemTitle>
                        <LinkNavItem title="North" href="/tours/multi-private-north" />
                        <LinkNavItem title="Central" href="/tours/multi-private-central" />
                        <LinkNavItem title="South" href="/tours/multi-private-south" />
                      </div>
                      <div className="flex w-full flex-col">
                        <NavItemTitle>Group tours</NavItemTitle>
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
                      {MORE_NAV_LINKS.map((link, index) => (
                        <LinkNavItem key={index} title={link.title} href={link.href} />
                      ))}
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

const NavItemTitle = ({ children }) => {
  return (
    <p className="text-sm font-bold leading-none mb-3 pl-1 text-secondary">{children}</p>
  )
}

const LinkNavItem = ({ title, href, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/60 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" {...props}>
          
          <p className="text-sm font-medium leading-none">{title}</p>
        </Link>
      </NavigationMenuLink>
    </li> 
  )
}

export default Navbar