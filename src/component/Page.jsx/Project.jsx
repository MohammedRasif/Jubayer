import React from "react";
import image from "../../image/Frame 1000004066.png";
import image1 from "../../image/1.png";
import image2 from "../../image/2.png";
import image3 from "../../image/3.png";
import image4 from "../../image/Screenshot_2 1.png";
import image5 from "../../image/Didiflow cover 1.png";
import ProjectCards from "./ProjectCard";
function Project() {
  return (
    <div className="pt-30">
      <div className="text-center flex flex-col items-center justify-center container mx-auto">
        <img src={image} alt="" />

        <h1 className="text-4xl font-semibold rozha  bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent">
          My Creative Journey
        </h1>

        <p className="text-[#64748B] text-2xl  text-center">
          I like exploring and learning new. I always build projects try out new
          tools and concepts.
        </p>
      </div>
      <div className="container mx-auto pb-20">
        <ProjectCards />
      </div>
      <div  className="flex flex-col items-center justify-center space-y-5 bg-[#17223AED] py-14">
        <h1 className="text-4xl font-semibold rozha  bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent">
          Have a project in mind?
        </h1>
        <p className="text-[#64748B] text-[18px] text-center">
          Let's collaborate and create something amazing together. <br /> I'm always
          excited to work on new and challenging projects.
        </p>
        <button className="text-[16px] px-6 py-3 bg-gradient-to-r from-[#194BFB] to-[#7D3AED] text-white font-semibold rounded-md">
          get in Touch
        </button>
      </div>
    </div>
  );
}

export default Project;
