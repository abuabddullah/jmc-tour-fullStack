import BookingPlatform from "@/components/homepage/BookingPlatform";
import ChooseJMC from "@/components/homepage/ChooseJMC";
import GetToKNow from "@/components/homepage/GetToKNow";
import GoExotic from "@/components/homepage/GoExotic";
import HeroSection from "@/components/homepage/HeroSection";
import OurPartner from "@/components/homepage/OurPartner";
import PopularTours from "@/components/homepage/PopularTours";
import Image from "next/image";

export default function Home() {
  return (
    <main class="">
      <HeroSection />
      <GoExotic />
      <GetToKNow />
      <PopularTours />
      <BookingPlatform />
      <OurPartner />
      <ChooseJMC /> 
    </main>
  );
}
