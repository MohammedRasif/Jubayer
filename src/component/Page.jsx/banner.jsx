"use client";

import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaFacebookF,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";

function Banner() {
  return (
    <div className=" text-white min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden relative">
      {/* Decorative dots */}
      <div className="absolute top-20 right-32 w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
      <div className="absolute top-32 right-[40vh] w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></div>
      <div className="absolute bottom-32 right-24 w-1 h-1 rounded-full bg-yellow-400 animate-pulse"></div>
      <div className="absolute top-40 left-1/2 w-1 h-1 rounded-full bg-blue-300 animate-pulse"></div>
      <div className="absolute top-[60vh] left-1/2 w-4 h-4 rounded-full bg-blue-300 animate-pulse"></div>
      <div className="absolute top-96 right-[90vh] w-2 h-2 rounded-full bg-blue-300 animate-pulse"></div>
      <div className="absolute top-50 right-50 w-3 h-3 rounded-full bg-blue-700 animate-pulse"></div>
      <div className="absolute top-96 right-72 w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:-mt-34">
        <div className="space-y-8">
          <div className="space-y-4 rozha">
            <h1 className="text-5xl md:text-[60px] font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent">
                Design That Connects.
              </span>
              <br />

              <span className="bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent">
                Experiences That Matter.
              </span>
            </h1>
          </div>

          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            I'm Jasper Ahmad, a UI/UX & Graphic Designer passionate about
            blending creativity with usability. I design impactful web and
            mobile experiences that help businesses grow and users enjoy every
            interaction.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-all"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-all"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-all"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-all"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-all"
            >
              <FaBehance className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-all"
            >
              <FaDribbble className="w-5 h-5" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4 ">
            <button className="px-6 py-3 border-2  from-blue-500  to-purple-600 text-white rounded-lg hover:border-white hover:bg-white hover:text-slate-900 transition-all font-semibold flex items-center gap-2">
              Resume{" "}
              <span>
                <MdOutlineFileDownload size={20} />
              </span>
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold flex items-center gap-2">
              View Project{" "}
              <span>
                <GoArrowRight />
              </span>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center relative lg:-mt-36">
          <div className="relative w-96 h-96">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full bg-blue-700 blur-3xl opacity-10 animate-pulse"></div>
              <div className="absolute inset-1 rounded-full bg-blue-600 blur-2xl opacity-10"></div>
              <div className="absolute inset-2 rounded-full bg-blue-900 blur-xl opacity-10"></div>

              {/* Image Container */}
              <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl shadow-blue-700/60 backdrop-blur-sm bg-[#081228]">
                <img
                  src="https://res.cloudinary.com/dsttqdu25/image/upload/v1763799550/2025-11-12_01_38_30.138_0600_1_z23edd.png"
                  alt="Jasper Ahmad"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>

            {/* Decorative Ring */}
            <div
              className="absolute inset-0 rounded-full border-3 border-transparent border-t-blue-600 border-r-purple-700 animate-spin"
              style={{ animationDuration: "3s" }}
            ></div>

            {/* Project Overview Card */}
            <div className="absolute  -right-10  bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl p-6 w-[50vh] shadow-2xl mt-5">
              <div className="space-y-4 space-x-3 flex  justify-between">
                <div>
                  <div>
                    <h3 className="text-[27px] font-semibold text-white">
                      Project <br /> Overview
                    </h3>
                  </div>
                  <div className="flex justify-start pt-7">
                    <div className="w-13 h-13 rounded-full border-2 border-blue-500 flex items-center justify-center">
                      <span className="text-blue-400 text-4xl -mt-2 -ml-1 rotate-320">
                        →
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex justify-between items-center space-x-20">
                    <span className="text-gray-400 text-[19px]">
                      Website Design
                    </span>
                    <span className="text-blue-400 font-semibold">65</span>
                  </div>
                  <hr className="text-gray-600" />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-[19px]">
                      Mobile App Design
                    </span>
                    <span className="text-blue-400 font-semibold">55</span>
                  </div>
                  <hr className="text-gray-600" />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-[19px]">
                      Live Projects
                    </span>
                    <span className="text-blue-400 font-semibold">27</span>
                  </div>
                </div>
                {/* Small arrow icon */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
