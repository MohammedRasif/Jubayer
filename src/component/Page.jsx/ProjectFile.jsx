"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const categoryMap = {
  "All Project": null,
  "Website Design": "website_design",
  "Mobile App": "mobile",
  "Live Projects": "live",
  "Case Study": "case_study",
  "Graphic Design": "graphic_design",
};

const categories = [
  "All Project",
  "Website Design",
  "Mobile App",
  "Live Projects",
  "Case Study",
  "Graphic Design",
];

export default function ProjectFile() {
  const [activeCategory, setActiveCategory] = useState("All Project");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const baseURL = "https://ahmadjubayerr.pythonanywhere.com";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/projects/`);
        setProjects(res.data || []);
        console.log("API Projects:", res.data);
      } catch (error) {
        console.error("Projects API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const normalizeCategory = (cat) => {
    if (!cat) return "";
    return cat
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All Project") return true;

    const selected = activeCategory.toLowerCase();
    const tags = (project.tag || "")
      .toLowerCase()
      .split(",")
      .map((t) => t.trim());

    return tags.some((tag) => tag.includes(selected));
  });
  const handleViewProject = (project) => {
    localStorage.setItem("selectedProjectId", project.id);

    const tagsArray = (project.tag || "").split(",").map((tag) => tag.trim());

    localStorage.setItem("selectedProjectTags", JSON.stringify(tagsArray));
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#081228]">
        <p className="text-white text-xl">Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex flex-wrap gap-3 justify-center bg-[#00184C] py-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              activeCategory === category
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                : "bg-transparent text-gray-300 border border-gray-600 hover:border-blue-500 hover:text-blue-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center text-gray-400 py-20 text-xl">
            No projects found in this category yet
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  handleViewProject(project);
                  navigate(`/project_details/${project.id}`);
                }}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900/60 to-gray-900/40 transition-all duration-500 hover:scale-[1.04] hover:shadow-2xl hover:shadow-blue-900/30 hover:border-6 hover:border-blue-600/50 cursor-pointer min-h-[520px] flex flex-col backdrop-blur-sm"
              >
                {/* Image Section */}
                <div className="relative h-[340px] overflow-hidden bg-black/40">
                  {project.canvas_image ? (
                    <>
                      <img
                        src={`${baseURL}${project.canvas_image}`}
                        alt={project.title || "Project image"}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      {/* Blur Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      No preview image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col transition-colors duration-300 group-hover:bg-gray-900/70">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project?.tag?.split(",")?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-1.5 text-xs font-medium text-gray-300 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
                      >
                        {normalizeCategory(tag.trim())}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                    {project.title || "Untitled Project"}
                  </h3>

                  <p className="text-gray-300 text-base leading-relaxed line-clamp-4 flex-1">
                    {project.body || "No description available..."}
                  </p>
                </div>

                {/* Hover Overlay + View Project Button */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10 pointer-events-none group-hover:pointer-events-auto backdrop-blur-[2px]">
                  <NavLink
                    to={`/project_details/${project.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewProject(project);
                    }}
                    className="px-5 py-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-md transition-all"
                  >
                    View Project
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
