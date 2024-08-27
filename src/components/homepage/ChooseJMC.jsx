import Image from "next/image";
import React from "react";
import iceBg from "./../../assets/JMC-Tours-Travels.webp"
import { CiLocationOn } from "react-icons/ci";


const ChooseJMC = () => {
  return (
    <div class="lg:flex px-4 lg:px-0 pb-24 bg-slate-900">
      {/* Image Section */}
      <Image
          src={iceBg}
          alt="Scenic Mountain"
          class="lg:w-1/2 lg:h-[600px]"
          width={500}
          height={500}
        />

      {/* Text Section */}
      <div class=" flex flex-col  justify-center lg:px-16">
        <span class="text-green-600 text-xl lg:text-3xl lg:mt-16">
          Our benefit lists
        </span>{" "}
        <br />
        <h2 class="lg:text-6xl text-3xl font-bold mb-4 text-white">
          Why Choose JMC <br /> Tours & Travels?
        </h2>
        <p class="text-lg text-gray-600 mb-6 text-justify lg:max-w-96">
          JMC is one of the best Travel agencies in Bangladesh. We are providing
          reasonably priced tour packages with the safest journey possible.
          Fulfill your dream with us.​
        </p>
        <div class="flex items-center gap-4 mt-6">
          <div class="text-4xl">
          <CiLocationOn class="text-green-600 mr-5" />
          </div>
          <h4 class="text-white text-xl">Aftabnagar, Dhaka</h4>
        </div>
        <div class="flex items-center gap-4 mt-6">
          <div class="text-4xl">
          <CiLocationOn class="text-green-600 mr-5" />
          </div>
          <h4 class="text-white text-xl">Aftabnagar, Dhaka</h4>
        </div>
      </div>
    </div>
  );
};

export default ChooseJMC;
