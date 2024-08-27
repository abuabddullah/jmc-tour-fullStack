"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const GoExotic = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get("/api/locations/all-locations");
      setLocations(response?.data?.locations);
    }
    fetchData();
  }, []);

  return (
    <div class="lg:p-8 lg:pt-16">
      <div class="container">
        <h1 class="text-green-600 text-xl lg:text-3xl text-center">
          Popular Tours
        </h1>{" "}
        <br />
        <h2 class="text-4xl font-bold text-center mb-8">Go Exotic Places</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              class="bg-transparent rounded-lg shadow-lg overflow-hidden"
            >
              <div class="relative h-64 w-full">
                <Link href={`location/${location?._id}`}>
                  <Image
                    src={location?.image}
                    alt={location?.name}
                    layout="fill"
                    objectFit="cover"
                    class="rounded-t-lg"
                  />
                </Link>
                <div class="absolute top-2 right-2">
                  <button class="text-white px-2 bg-green-600 rounded-full shadow-md">
                    1 tour
                  </button>
                </div>
              </div>
              <div class="p-4 bg-transparent">
                <div class="flex justify-between items-center mb-2">
                  <h3 class="text-xl font-semibold">{location?.category}</h3>
                </div>
                <p class="text-gray-600 text-sm">{location?.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoExotic;
