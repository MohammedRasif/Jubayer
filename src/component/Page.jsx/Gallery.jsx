import React, { useEffect, useState } from "react";
import axios from "axios";
import image from "../../image/Frame 10000.png";

const BASE_URL = "https://ahmadjubayerr.pythonanywhere.com";

function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://ahmadjubayerr.pythonanywhere.com/api/profile/")
      .then((res) => {
        const achievements = res.data?.achievements || [];

        // base url add + max 7 image
        const formattedImages = achievements
          .slice(0, 7)
          .map((img) => `${BASE_URL}${img}`);

        setGalleryImages(formattedImages);
      })
      .catch((err) => {
        console.error("Gallery API error:", err);
      });
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="text-center flex flex-col items-center justify-center container mx-auto">
        <img src={image} alt="" />

        <h1 className="text-4xl font-semibold rozha bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent py-3">
          Behind My Design Story
        </h1>

        <p className="text-[#64748B] text-2xl text-center">
          I like exploring and learning new. I always build projects try out new
          tools and concepts
        </p>
      </div>

      {/* Gallery */}
      <div className="p-6 flex justify-center items-center py-20">
        <div
          className="grid grid-cols-4 grid-rows-3 gap-5 w-full container mx-auto"
          style={{ height: "80vh" }}
        >
          {/* Image 1 – big */}
          {galleryImages[0] && (
            <div className="rounded-xl overflow-hidden bg-gray-900 col-span-2 row-span-2 col-start-1 row-start-1">
              <img
                src={galleryImages[0]}
                alt="Achievement 1"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
              />
            </div>
          )}

          {/* Image 3 */}
          {galleryImages[2] && (
            <div className="rounded-xl overflow-hidden bg-gray-900 col-span-1 row-span-2 col-start-3 row-start-1">
              <img
                src={galleryImages[2]}
                alt="Achievement 3"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
              />
            </div>
          )}

          {/* Image 4 */}
          {galleryImages[3] && (
            <div className="rounded-xl overflow-hidden bg-gray-900 col-span-1 row-span-1 col-start-4 row-start-1">
              <img
                src={galleryImages[3]}
                alt="Achievement 4"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
              />
            </div>
          )}

          {/* Image 2 – small */}
          {galleryImages[1] && (
            <div className="rounded-xl overflow-hidden bg-gray-900 col-span-2 row-span-1 col-start-1 row-start-3">
              <img
                src={galleryImages[1]}
                alt="Achievement 2"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
              />
            </div>
          )}

          {/* Image 5 */}
          {galleryImages[4] && (
            <div className="rounded-xl overflow-hidden bg-gray-900 col-span-1 row-span-1 col-start-4 row-start-2">
              <img
                src={galleryImages[4]}
                alt="Achievement 5"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
              />
            </div>
          )}

          {/* Image 6 */}
          {galleryImages[5] && (
            <div className="rounded-xl overflow-hidden bg-gray-900 col-span-1 row-span-1 col-start-3 row-start-3">
              <img
                src={galleryImages[5]}
                alt="Achievement 6"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
              />
            </div>
          )}

          {/* Image 7 */}
          {galleryImages[6] && (
            <div className="rounded-xl overflow-hidden bg-gray-900 col-span-1 row-span-1 col-start-4 row-start-3">
              <img
                src={galleryImages[6]}
                alt="Achievement 7"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
