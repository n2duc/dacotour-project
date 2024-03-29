import Banner from "@/components/Banner";
import Contact from "@/components/sections/Contact";
import TourSection from "@/components/sections/TourSection";
import TripadvisorSection from "@/components/sections/TripadvisorSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import OtherTourSection from "@/components/sections/OtherTourSection";
import GreatMomentSection from "@/components/sections/GreatMomentSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner/>
      <TestimonialsSection />
      <TourSection />
      <TourSection />
      <OtherTourSection />
      <GreatMomentSection />
      <TripadvisorSection />
      <Contact /> 
    </div>
  );
}