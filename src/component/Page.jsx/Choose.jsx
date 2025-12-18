import React from "react";
import image from "../../image/Frame 100.png";
import image1 from "../../image/Image.png";
import image3 from "../../image/Expertise.png";
function Choose() {
  return (
    <div className="container mx-auto">
      <div className="flex  items-center justify-between ">
        <div className="w-1/2">
          <img src={image} alt="" />

          <h1 className="text-6xl py-10 font-semibold rozha  bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent">
            Why I'm Your Ideal <br /> Design Partner
          </h1>

          <p className="text-[#64748B] text-[18px] max-w-xl">
            I create designs that are not only visually appealing but also easy
            to use. My strength lies in combining creative thinking with
            user-centered design to craft digital experiences and visuals that
            truly connect with people. With skills in UI/UX and Graphic Design,
            I focus on delivering clean, modern, and impactful work that makes
            brands stand out.
          </p>
        </div>
        <div className="w-1/2 h-[475px] w=[555px]">
          <img
            src={image1}
            className="h-full w-full object-cover rounded-xl"
            alt=""
          />
        </div> 
      </div>
      <div className="pb-20">
        <h1 className="text-[30px] font-semibold py-10 pt-20">My Expertise:</h1>
        <img src={image3} alt="" />
      </div>
    </div>
  );
}

export default Choose;
