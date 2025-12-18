import React from "react";
import image from "../../image/Frame 10000.png"
function Contact() {
  return (
    <div>
      <div className="text-center flex flex-col items-center justify-center container mx-auto">
        <img src={image} alt="" />

        <h1 className="text-4xl font-semibold rozha  bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent py-3">
          Behind My Design Story
        </h1>

        <p className="text-[#64748B] text-2xl  text-center">
          I like exploring and learning new. I always build projects try out new
          tools and concepts
        </p>
      </div>



      
    </div>
  );
}

export default Contact;
