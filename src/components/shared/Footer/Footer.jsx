import Image from "next/image";
import Link from "next/link";
import jmctourslogo from "./../../../assets/jmc-tours-logo.png"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import FooterForm from "./FooterForm";
import WhiterFooter from "./WhiterFooter";
const Footer = () => {
  return (
    <footer class="bg-slate-900 text-neutral-content font-bold text-white">
      <div class="container lg:flex lg:flex-wrap justify-between gap-6  lg:p-10">
        <div>
          <Link href="/" class="mb-0">
            <Image src={jmctourslogo} alt="logo" width={100} />
          </Link>
          <p class=" text-gray-500 py-4">
            Welcome to our JMC Tours & Travel <br /> Limited.
          </p>

          {/* <Separator class=" text-gray-400 mb-4" /> */}

          <div class="grid grid-cols-1 gap-4 text-gray-500">
            <div class="flex items-center gap-4">
              <FaEnvelope />
              <a
                class="hover:text-[#DD7364] delay-100 transition-all"
                href="mailto:info@jmc.tours"
              >
                info@jmc.tours
              </a>
            </div>
            <div class="flex items-center gap-4">
              <FaPhoneAlt />
              <a
                class="hover:text-[#DD7364] delay-100 transition-all"
                href="tel:+8801321210094"
              >
                01321210094
              </a>
            </div>
            <div class="flex items-center gap-4">
              <CiLocationOn />
              <Link
                class="hover:text-[#DD7364] delay-100 transition-all"
                href="/"
              >
                Aftabnagar, Dhaka
              </Link>
            </div>
          </div>
        </div>

        <div class="">
          <h6 class="text-xl font-bold mb-6">Company</h6>
          <div class="grid grid-cols-1 gap-4 text-gray-500">
            <Link href="/" class="mb-0">
              About Us
            </Link>
            <Link href="/" class="mb-0">
              Blogs
            </Link>
            <Link href="/" class="mb-0">
              Careers
            </Link>
            <Link href="/" class="mb-0">
              Travel with us
            </Link>
            <Link href="/" class="mb-0">
              Contact
            </Link>
          </div>
        </div>
        <div class="">
          <h6 class="text-xl font-bold mb-6">Explore</h6>
          <div class="grid grid-cols-1 gap-4 text-gray-600">
            <Link href="/" class="mb-0">
              Account
            </Link>
            <Link href="/" class="mb-0">
              Privacy Policy
            </Link>
            <Link href="/" class="mb-0">
              Terms & Condition
            </Link>
          </div>
        </div>
        <div>
          <h6 class="text-xl font-bold mb-4">Newsletter</h6>
          <FooterForm />
        </div>
      </div>
      <div>
        <WhiterFooter/>
      </div>
      
      <p class="text-gray-700 lg:mx-80 lg:hidden bg-white text-center p-4">
              © Copyright 2024 by JMC Tours. All rights reserved.
            </p>
    </footer>
  );
};

export default Footer;
