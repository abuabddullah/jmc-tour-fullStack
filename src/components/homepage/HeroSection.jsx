import Image from "next/image";
import bgImg from "./../../assets/herbg.png"
const HeroSection = () => {
  return (
    <section class="relative flex items-center justify-center h-[300px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div class="absolute inset-0">
        <Image
          src={bgImg}  // Path to your background image
          alt="Background Image"
          layout="fill"  // Cover the entire section
          objectFit="cover"  // Ensure the image covers the section without distortion
          priority
        />
      </div>
      
      {/* Overlay */}
      <div class="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div class="relative z-10 text-center text-white px-4 lg:px-8">
        <h1 class="text-4xl lg:text-7xl font-bold mb-4 text-right">
          Travel and Adventure
          <br /> with JMC
        </h1>
        
        <p class="text-lg lg:text-3xl mb-8">
          Where would you like to go?
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

