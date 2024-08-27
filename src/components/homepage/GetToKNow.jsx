import Image from "next/image";
import iceBg from "./../../assets/JMC-Tours-Travels.webp"
const GetToKNow = () => {
  return (
    <div class="flex flex-col lg:flex-row items-center lg:items-start mt-16 p-8 lg:p-16">
      {/* Image Section */}
      <div class="relative w-full lg:w-1/2">
        <Image
          src={iceBg}
          alt="Scenic Mountain"
          class="w-full h-auto rounded-lg shadow-lg"
          width={500}
          height={500}
        />
        <div class="absolute bottom-16 lg:bottom-1/2 left-4 bg-white text-black p-3 rounded-lg shadow-md">
          <p class="font-bold">BOOK NOW</p>
          <p class="text-lg font-semibold">+8801321210094</p>
        </div>
      </div>

      {/* Text Section */}
      <div class="mt-8 lg:mt-0 lg:ml-16 w-full lg:w-1/2">
        <span class="text-green-600 text-xl lg:text-3xl">get to know us</span> <br />
        <h2 class="lg:text-6xl text-3xl font-bold mb-4">
          Plan Your Trip with{" "} <br />JMC Tours & Travels
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          Experience amazing trips with the top-notch company, JMC Tour and
          Travel. From breathtaking scenery to traditionally diverse places, we
          offer personalized experiences based on your preferences. Allow us to
          guide you on an easygoing journey where every moment is thrilling and
          educational.
        </p>
        <ul class="list-none space-y-2">
          <li class="flex items-center">
            <span class="text-white text-xs px-1 mr-2 rounded-full bg-green-600">✔</span>
            <span>Invest in your dream with an expedition.</span>
          </li>
          <li class="flex items-center">
          <span class="text-white text-xs px-1 mr-2 rounded-full bg-green-600">✔</span>
            <span>
              Every location provides you with unforgettable memories.
            </span>
          </li>
          <li class="flex items-center">
          <span class="text-white text-xs px-1 mr-2 rounded-full bg-green-600">✔</span>
            <span>Feel the nature and fade on it.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetToKNow;
