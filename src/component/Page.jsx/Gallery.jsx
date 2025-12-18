import React from "react";
import image from "../../image/Frame 10000.png";

function Gallery() {
  const galleryImages = [
    "path/to/your/image1.jpg",
    "path/to/your/image2.jpg",
    "path/to/your/image3.jpg",
    "path/to/your/image4.jpg",
    "path/to/your/image5.jpg",
    "path/to/your/image6.jpg",
  ];
  return (
    <div>
      <div className="text-center flex flex-col items-center justify-center container mx-auto">
        <img src={image} alt="" />

        <h1 className="text-4xl font-semibold rozha  bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent py-3">
          Behind My Design Story
        </h1>

        <p className="text-[#64748B] text-2xl  text-center">
         I like exploring and learning new. I always build projects try out new tools and concepts
        </p>
      </div>
      <div>
        <div className="p-6 flex justify-center items-center py-20">
          <div
            className="grid grid-cols-4 grid-rows-3 gap-5 w-full container mx-auto"
            style={{ height: "80vh" }}
          >
            <div className="rounded-xl overflow-hidden bg-gray-900 col-span-2 row-span-1">
              <img
                src={galleryImages[0]}
                alt="Gallery Item 1"
                className="w-full h-full object-cover rounded-xl opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>

            <div className="rounded-xl overflow-hidden bg-gray-900 col-span-1 row-span-2 col-start-3 row-start-1">
              <img
                src={galleryImages[2]}
                alt="Gallery Item 3"
                className="w-full h-full object-cover rounded-xl opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>

            <div className="rounded-xl overflow-hidden bg-gray-900 col-span-1 row-span-1 col-start-4 row-start-1">
              <img
                src={galleryImages[3]}
                alt="Gallery Item 4"
                className="w-full h-full object-cover rounded-xl opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>

            <div className="rounded-xl overflow-hidden bg-gray-900 col-span-2 row-span-2 row-start-2">
              <img
                src={galleryImages[1]}
                alt="Gallery Item 2"
                className="w-full h-full object-cover rounded-xl opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>

            <div className="rounded-xl overflow-hidden bg-gray-900 col-span-1 row-span-1 col-start-4 row-start-2">
              <img
                src={galleryImages[4]}
                alt="Gallery Item 5"
                className="w-full h-full object-cover rounded-xl opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>

            <div className="rounded-xl overflow-hidden bg-gray-900 col-span-1 row-span-1 col-start-3 row-start-3">
              <img
                src={galleryImages[5]}
                alt="Gallery Item 6"
                className="w-full h-full object-cover rounded-xl opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
