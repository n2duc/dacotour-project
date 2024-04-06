'use client'

import Link from "next/link";
import { tourLink } from "@/lib/data"
import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context/active-section-context";

const TourHeader = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <div className="sticky top-[97px] z-30">
      <nav className="flex flex-wrap items-center gap-2 p-2 rounded-b-md bg-primary/80 backdrop-blur-sm">
        {tourLink.map((link) => (
          <Link
            href={link.hash} 
            key={link.hash} 
            className={cn("text-black font-medium text-sm px-3 py-[6px] rounded-md bg-white/30", { "bg-white text-gray-800": activeSection === link.name })}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default TourHeader