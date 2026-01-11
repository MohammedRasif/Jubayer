"use client";
import TechAnimation from "./TechAnimation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

function banner() {
  const [websiteCount, setWebsiteCount] = useState(0);
  const [mobileCount, setMobileCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
    const [activeLink, setActiveLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to section with offset
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 50;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleNavClick = (id) => {
    setActiveLink(id);
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://ahmadjubayerr.pythonanywhere.com/api/profile/"
        );
        setProfile(response.data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Counters animation based on API data
  useEffect(() => {
    if (!profile) return;

    const duration = 2000;
    const steps = 60;

    const websiteMax = profile.counts.website || 0;
    const websiteInterval = setInterval(() => {
      setWebsiteCount((prev) => {
        if (prev >= websiteMax) {
          clearInterval(websiteInterval);
          return websiteMax;
        }
        return prev + 1;
      });
    }, duration / steps);

    setTimeout(() => {
      const mobileMax = profile.counts.mobile || 0;
      const mobileInterval = setInterval(() => {
        setMobileCount((prev) => {
          if (prev >= mobileMax) {
            clearInterval(mobileInterval);
            return mobileMax;
          }
          return prev + 1;
        });
      }, duration / steps);
    }, 800);

    setTimeout(() => {
      const projectMax = profile.counts.live || 0;
      const projectInterval = setInterval(() => {
        setProjectCount((prev) => {
          if (prev >= projectMax) {
            clearInterval(projectInterval);
            return projectMax;
          }
          return prev + 1;
        });
      }, duration / steps);
    }, 800);

    return () => {
      clearInterval(websiteInterval);
    };
  }, [profile]);

  if (loading) {
    return <div className="w-full py-12 text-center text-white">Loading profile...</div>;
  }

  if (!profile) {
    return <div className="w-full py-12 text-center text-red-400">Failed to load profile</div>;
  }

  const baseUrl = "https://ahmadjubayerr.pythonanywhere.com";

  return (
    <div>
      <div className="-mt-20 -ml-16 mb-20">
        <TechAnimation />
      </div>
      <div className="absolute -top-10 left-0 w-full h-full flex flex-col items-center justify-center ">
        <div className=" h-[60vh] w-[60vh] rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-2xl">
          <span className=" font-bold text-white">
            <img src={`${baseUrl}${profile.profile_image}`} className="w-full h-full" alt="" />
          </span>
        </div>

        <div className=" max-w-7xl w-full text-center space-y-2 -mt-10 ">
          {/* Main Heading */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-[53px] font-bold rozha">
              <span className="bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent">
                Design That Connects. Experiences That Matter.
              </span>{" "}
              
              {/* <span className="bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent">
               
              </span>{" "} */}
            </h1>
          </div>

          {/* Description */}
          <p className="md:text-[16px] text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {profile.about_me}
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 my-8">
            <a
              href="https://www.instagram.com/ahmadjubayerr/?__pwa=1"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://x.com/ahmadjubayerr"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <BsTwitterX size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmadjubayerr/"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              href="https://www.behance.net/ahmadjubayerr"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <FaBehance size={22} />
            </a>
            <a
              href="https://dribbble.com/ahmadjubayerr"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <FaDribbble  size={22} />
            </a>
            <a
              href="https://www.facebook.com/ahmadjubayerrr/"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <FaFacebookF size={22} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={`${baseUrl}${profile.resume}`}
              download
              className="px-9 py-2 bg-transparent border-2 border-blue-600 rounded-md text-blue-400 font-medium hover:bg-blue-600/10 transition-all text-lg"
            >
              Resume
            </a>

            <button onClick={() => scrollToSection("hire_me")} className=" flex items-center px-10 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md font-medium text-white hover:from-blue-700 hover:to-purple-700 transition-all text-lg shadow-lg shadow-blue-600/20">
              Hire Me <FaArrowRight className="ml-3 mt-[2px]"/>

            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-6">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#0137fa]">
                {websiteCount}+
              </div>
              <p className="text-gray-400 mt-3 text-lg">Website Design</p>
            </div>

            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#0137fa]">
                {mobileCount}+
              </div>
              <p className="text-gray-400 mt-3 text-lg">Mobile App Design</p>
            </div>

            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#0137fa]">
                {projectCount}+
              </div>
              <p className="text-gray-400 mt-3 text-lg">Live Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default banner;