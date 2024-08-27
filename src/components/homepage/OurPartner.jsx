import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurPartner = () => {
  return (
    <section class="py-16 lg:p-40 bg-green-600">
      <div class="container lg:flex gap-8 justify-center align-middle">
        <h1 class="lg:text-4xl text-xl font-bold text-white mb-8">
          Our <br /> Partners
        </h1>
        <div class="flex gap-4  overflow-x-auto">
          <Link href="/partner1">
            <Image
              src="https://i.ibb.co/jvBVcJh/tour-11.jpg"
              alt="OurPartner"
              class="transition-all hover:scale-75"
              objectFit="cover"
              width={150}
              height={150}
            />
          </Link>
          <Link href="/partner2">
            <Image
              src="https://i.ibb.co/jvBVcJh/tour-11.jpg"
              alt="OurPartner"
              class="transition-all hover:scale-75"
              objectFit="cover"
              width={150}
              height={150}
            />
          </Link>
          <Link href="/partner3">
            <Image
              src="https://i.ibb.co/jvBVcJh/tour-11.jpg"
              alt="OurPartner"
              class="transition-all hover:scale-75"
              objectFit="cover"
              width={150}
              height={150}
            />
          </Link>
          <Link href="/partner4">
            <Image
              src="https://i.ibb.co/jvBVcJh/tour-11.jpg"
              alt="OurPartner"
              class="transition-all hover:scale-75"
              objectFit="cover"
              width={150}
              height={150}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
