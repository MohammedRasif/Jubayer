import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#081228] text-white pt-12 ">
      <div className="container mx-auto bg-[#194BFB08]  gap-8 border-t border-x rounded-md border-gray-700  px-10 ">
        <div className="order-2 md:order-2 text-center md:text-left flex  justify-between items-center">
          <p className="text-sm text-gray-400 font-bold">
            © 2026 Jubayer. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 my-8">
            <a
              href="https://www.instagram.com/ahmadjubayerr/?__pwa=1"
              target="_blank"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://x.com/ahmadjubayerr"
              target="_blank"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <BsTwitterX size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmadjubayerr/"
              target="_blank"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              href="https://www.behance.net/ahmadjubayerr"
              target="_blank"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <FaBehance size={22} />
            </a>
            <a
              href="https://dribbble.com/ahmadjubayerr"
              target="_blank"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <FaDribbble size={22} />
            </a>
            <a
              href="https://www.facebook.com/ahmadjubayerrr/"
              target="_blank"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <FaFacebookF size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
