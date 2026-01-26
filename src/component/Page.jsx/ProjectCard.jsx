"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

export default function ProjectCardsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://ahmadjubayerr.pythonanywhere.com/api/favorite-projects/"
        );
        setProjects(response.data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Get the 3 visible cards (current + next 2)
  const getVisibleCards = () => {
    if (projects.length === 0) return [];
    return [
      projects[currentIndex],
      projects[(currentIndex + 1) % projects.length],
      projects[(currentIndex + 2) % projects.length],
    ];
  };

  const handleNext = () => {
    if (isAnimating || projects.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating || projects.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const visibleCards = getVisibleCards();

  const widthClasses = ["w-3/8", "w-2/6", "w-2/8"];

  const getWidthClass = (index) => {
    if (hoveredIndex === null) {
      return widthClasses[index];
    }
    if (hoveredIndex === index) {
      return "w-3/8";
    }
    const otherIndices = [0, 1, 2].filter((i) => i !== hoveredIndex);
    const positionInOthers = otherIndices.indexOf(index);
    return positionInOthers === 0 ? "w-2/6" : "w-1/4";
  };

  // Loading & Error states
  if (loading) {
    return (
      <div className="w-full py-12 text-center text-white">
        Loading projects...
      </div>
    );
  }

  if (error) {
    return <div className="w-full py-12 text-center text-red-400">{error}</div>;
  }

  if (projects.length === 0) {
    return (
      <div className="w-full py-12 text-center text-slate-400">
        No projects found
      </div>
    );
  }

  return (
    <div className="w-full py-12">
      <div className="flex items-center justify-center gap-1 mx-auto">
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-white text-xl"
          aria-label="Previous slide"
        >
          <GoTriangleLeft size={70} />
        </button>
        <div className="flex gap-6 overflow-visible items-center">
          {visibleCards.map((card, index) => (
            <div
              key={`${card.id}-${currentIndex}`}
              className={`${getWidthClass(
                index
              )} transition-all duration-500 ease-out`}
              style={{
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                zIndex: hoveredIndex === index ? 10 : 1,
                opacity: 1,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`group relative bg-[#17223AED] rounded-2xl overflow-hidden h-full min-h-96 transition-all duration-500 shadow-lg hover:shadow-2xl border-4 border-transparent`}
                style={{
                  backgroundImage: hoveredIndex === index 
                    ? 'linear-gradient(#17223AED, #17223AED), linear-gradient(to right, #2563eb, #9333ea)' 
                    : 'none',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
              >
                <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl">
                  <div className="w-full h-full px-5 pt-5 group-hover:pt-0 transition-all duration-500">
                    <div className="relative w-full h-full">
                      <img
                        src={`https://ahmadjubayerr.pythonanywhere.com${card.canvas_image}`}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  {/* <img
                    src={`https://ahmadjubayerr.pythonanywhere.com${card.svg_file}`}
                    className="h-40 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    alt=""
                  /> */}
                  <div className=" text-8xl md:text-9xl font-bold text-slate-400 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500">
                    {String(index + 1 + currentIndex).padStart(2, "0")}
                  </div>
                </div>

                <div className="p-6 md:p-8 pt-16">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {card.tag.split(",").map((tag, i) => (
                      <button
                        key={i}
                        className="inline-block px-4 py-2 text-xs font-medium text-white bg-white/5 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
                      >
                        {tag.trim()}
                      </button>
                    ))}
                  </div>

                  <h3 className="text-[20px] md:text-[22px] font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {card.title}
                  </h3>

                  <div className="flex flex-col flex-1 justify-between">
                    <p className="text-slate-400 text-[18px] md:text-base leading-relaxed line-clamp-4 group-hover:text-slate-300 transition-colors duration-300">
                      {card.body?.substring(0, 100) || "Project description..."}
                      {card.body?.length > 100 ? "..." : ""}
                    </p>
                  </div>
                </div>
                {/* Full Card Hover Overlay */}
                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20 pointer-events-none group-hover:pointer-events-auto backdrop-blur-[1px]">
                  <NavLink
                    to={`/project_details/${card.id}`}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  >
                    View Project
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="flex-shrink-0 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-white text-xl"
          aria-label="Next slide"
        >
          <GoTriangleRight size={70} />
        </button>
      </div>
    </div>
  );
}
