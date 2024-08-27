import Image from "next/image";
import bgImg2 from "./../../assets/bg-1.jpg"
import { FaPlay } from "react-icons/fa";
const BookingPlatform = () => {
  return (
    <section class="relative flex items-center justify-center p-40">
      {/* Background Image */}
      <div class="absolute inset-0">
        <Image
          src={bgImg2} // Path to your background image
          alt="Background Image"
          layout="fill" // Cover the entire section
          objectFit="cover" // Ensure the image covers the section without distortion
          priority
        />
      </div>

      {/* Overlay */}
      <div class="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div class="relative z-10 text-white px-4 lg:px-8 lg:flex gap-8">
        <div class="">
          <div class="p-6 bg-green-600 inline-block rounded-lg mb-4">
            <FaPlay class="text-white  text-2xl" />
          </div>
          <p class="text-green-600 text-base lg:text-xl mb-4">
            Are you ready to travel?
          </p>
          <h2 class="lg:text-4xl text-xl font-bold mb-4">
            JMC is a World Leading <br /> Online Tour Booking <br /> Platform
          </h2>
        </div>
        <div class="grid gap-2 lg:grid-cols-2">
          <div class="delay-150 transition-all hover:bg-[#DD7364] border rounded-sm p-10 flex flex-col gap-4 items-center">
            <div class="">
              <FaPlay class="text-white  text-2xl" />
            </div>
            <p class="text-center">
              Popular <br /> Package
            </p>
          </div>
          <div class="delay-150 transition-all hover:bg-[#DD7364] border rounded-sm p-10 flex flex-col gap-4 items-center">
            <div class="">
              <FaPlay class="text-white  text-2xl" />
            </div>
            <p class="text-center">
              Popular <br /> Package
            </p>
          </div>
          <div class="delay-150 transition-all hover:bg-[#DD7364] border rounded-sm p-10 flex flex-col gap-4 items-center">
            <div class="">
              <FaPlay class="text-white  text-2xl" />
            </div>
            <p class="text-center">
              Popular <br /> Package
            </p>
          </div>
          <div class="delay-150 transition-all hover:bg-[#DD7364] border rounded-sm p-10 flex flex-col gap-4 items-center">
            <div class="">
              <FaPlay class="text-white  text-2xl" />
            </div>
            <p class="text-center">
              Popular <br /> Package
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPlatform;
