import Link from "next/link";
import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Navbar2 from "./Navbar2";

const Navbar = () => {
  return (
    <nav class="grid grid-cols-1 shadow ">
      <div class="bg-slate-900 hidden lg:block">
        <div class="text-white container flex justify-between items-center mx-auto">
          <div class="flex gap-6 text-sm">
            <div class="flex items-center gap-4">
              <FaPhoneAlt class="text-[#DD7364]" />
              <a
                class="hover:text-[#DD7364] delay-100 transition-all"
                href="tel:+8801321210094"
              >
                01321210094
              </a>
            </div>
            <div class="flex items-center gap-4">
              <FaEnvelope class="text-[#DD7364]" />
              <a
                class="hover:text-[#DD7364] delay-100 transition-all"
                href="mailto:info@jmc.tours"
              >
                info@jmc.tours
              </a>
            </div>
          </div>
          <Link href="/ticket-booking">
            <button class="py-3 px-5 bg-green-600 hover:bg-[#DD7364] delay-100 transition-all text-sm">
              Ticket Booking
            </button>
          </Link>
        </div>
      </div>
      <div class="lg:hidden flex gap-4 items-center bg-slate-900 text-white px-3 py-4">
        <FaFacebookSquare />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
      <Navbar2 />
    </nav>
  );
};

export default Navbar;
