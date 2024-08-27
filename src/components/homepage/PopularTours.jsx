"use client"
import axios from "axios";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PopularTours = () => {
  
    const [tours, setTours] = useState([]);
    useEffect(() => {
      async function fetchData() {
        // You can await here
        const response = await axios.get("/api/tours/all-tours");
        setTours(response?.data?.tours);
      }
      fetchData();
    }, []);
  return (
    <div class="lg:p-8 pb-16">
      <div class="container">
        <h1 class="text-green-600 text-xl lg:text-3xl text-center">
          Popular Tours
        </h1>{" "}
        <h2 class="text-4xl font-bold text-center mb-8">Tour Packages</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours?.map((tour, index) => (
            <div
              key={index}
              class="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div class="relative h-64 w-full">
                <Link href={`tour/tour?._id`}>
                <Image
                  src={tour?.image}
                  alt={tour?.title}
                  layout="fill"
                  objectFit="cover"
                  class="rounded-t-lg"
                /></Link>
                <div class="absolute top-2 right-2">
                  <button class="bg-black text-white opacity-45 text-xl p-1 rounded-sm shadow-md">
                    <Heart class="" />
                  </button>
                </div>
              </div>
              <div class="p-4 bg-transparent">
                <div class="flex justify-between items-center mb-2">
                  <h3 class="text-xl font-semibold">{tour?.title}</h3>
                  <div class="text-yellow-500">
                    {Array(Math.floor(tour?.ratings))
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                </div>
                <p class="text-gray-600 text-sm">{tour?.location}</p>
                <p class="text-red-600 font-semibold mt-2">
                  From {tour?.cost}
                </p>
                <div class="text-sm text-gray-500 mt-1">
                  {tour?.reviews?.length || 0} reviews
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTours;
