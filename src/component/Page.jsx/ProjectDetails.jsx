"use client";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import image from "../../image/Element.png";
import image1 from "../../image/Project hero video 1.mp4";
import image2 from "../../image/Frame 1000004068.svg";
import image3 from "../../image/camera.svg";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [suggestedProjects, setSuggestedProjects] = useState([]);
  const [showAllSuggestions, setShowAllSuggestions] = useState(false);
  const baseURL = "https://ahmadjubayerr.pythonanywhere.com";

  // Smooth scroll to top when component mounts / page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Fetch single project details
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${baseURL}/api/projects/${id}/detail/`);
        setProject(response.data);
      } catch (err) {
        console.error("Error fetching project details:", err);
        setError("Failed to load project details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  // Fetch all projects & filter suggestions based on localStorage selected tags
  useEffect(() => {
    const fetchAllProjectsAndSuggest = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/projects/`);
        const allProjects = res.data || [];

        // Get selected tags from localStorage
        const selectedTags = JSON.parse(localStorage.getItem("selectedProjectTags")) || [];

        if (selectedTags.length === 0 || !project) {
          setSuggestedProjects([]);
          return;
        }

        // Normalize tags (trim + lowercase for comparison)
        const normalize = (str) => (str ? str.trim().toLowerCase() : "");

        // Find projects that share at least one tag with selected tags
        // Exclude the current project
        const suggestions = allProjects
          .filter((p) => p.id !== Number(id)) // exclude current project
          .filter((p) => {
            if (!p.tag) return false;
            const projectTags = p.tag.split(",").map(normalize);
            return selectedTags.some((selected) => projectTags.includes(normalize(selected)));
          });

        setSuggestedProjects(suggestions);
      } catch (err) {
        console.error("Error fetching projects for suggestions:", err);
      }
    };

    // Only run after current project is loaded
    if (project) {
      fetchAllProjectsAndSuggest();
    }
  }, [project, id]);

  // Simple category normalizer
  const normalizeCategory = (tag) => {
    return tag
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  // Decide how many to show
  const displayedProjects = showAllSuggestions
    ? suggestedProjects
    : suggestedProjects.slice(0, 2);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#081228]">
        <div className="text-white text-xl animate-pulse">Loading project details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#081228] text-white">
        <p className="text-red-400 text-2xl mb-6">{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          ← Back
        </button>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#081228] text-white">
        <p className="text-xl mb-6">Project not found</p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#081228] text-white pb-16">
      <video
        src={image1}
        autoPlay
        loop
        muted
        playsInline
        className="opacity-60 h-[58vh] -mt-12"
      ></video>

      <div className="">
        <div className="absolute top-10 left-2/12">
          <img src={image} alt="" className="mx-auto h-[47vh] lg:-mt-10 " />
        </div>

        <div className="flex items-center justify-center">
          <div className="absolute top-8">
            <div className="relative text-center px-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-7">
                <img
                  src={image2}
                  alt="JJ Logo"
                  className="h-11 md:h-16 lg:h-18 drop-shadow-2xl"
                />
              </div>

              <div className="inline-flex items-center px-4 py-2 mb-3 bg-[#334155]/80 backdrop-blur-sm rounded-md border border-gray-600/50 shadow-lg">
                <NavLink to="/">
                  <span className="text-gray-400 text-sm font-medium">Home</span>
                </NavLink>
                <span className="mx-2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <NavLink className="cursor-pointer" to="/project">
                  <span className="text-gray-400 text-sm font-medium">Projects</span>
                </NavLink>
                <span className="mx-2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="text-gray-200 text-sm font-medium">Projects Details</span>
              </div>

              <h1 className="text-white max-w-3xl text-4xl md:text-5xl lg:text-[48px] rozha font-bold leading-tight tracking-wide drop-shadow-2xl">
                {project.title}
              </h1>
            </div>

            <div className="relative max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left px-6 py-5">
              <div>
                <p className="text-gray-400 text-[18px] tracking-wide mb-2 text-center">Duration</p>
                <h1 className="text-white text-3xl md:text-[24px] font-semibold text-center">{project.duration}</h1>
              </div>
              <div>
                <p className="text-gray-400 text-[18px] tracking-wide mb-2 text-center">Category</p>
                <h1 className="text-white text-3xl md:text-[24px] font-semibold text-center">{project.category}</h1>
              </div>
              <div>
                <p className="text-gray-400 text-[18px] tracking-wide mb-2 text-center">Responsibility</p>
                <h1 className="text-white text-3xl md:text-[24px] font-semibold text-center">UX & UI Design</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <button
          onClick={() => navigate(-1)}
          className="mb-10 flex items-center gap-2 text-gray-500 hover:text-gray-400 cursor-pointer transition-colors text-lg bg-[#00184C] w-full py-8 px-50 -mt-12 "
        ></button>

        <div className="max-w-7xl mx-auto flex flex-col items-center -mt-20">
          <div className="w-full pb-16 lg:pb-24 relative">
            {project.overview_video_link && (
              <div className="w-full max-w-[100vh] mx-auto overflow-hidden border-32 border-t-50 border-gray-800 bg-black rounded-3xl shadow-2xl">
                <div className="relative w-full rounded-md" style={{ aspectRatio: "16/9" }}>
                  {getYouTubeId(project.overview_video_link) ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(project.overview_video_link)}?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1&showinfo=0`}
                      title="Project Overview Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-md"
                      poster={`${baseURL}${project.canvas_image || ""}`}
                    />
                  ) : (
                    <video
                      src={`${baseURL}${project.overview_video_link}`}
                      controls
                      autoPlay
                      muted
                      playsInline
                      loop
                      className="absolute inset-0 w-full h-full object-cover rounded-md"
                      poster={`${baseURL}${project.canvas_image || ""}`}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>
            )}
            <img src={image3} className="absolute top-[12px] left-1/2" alt="" />
          </div>

          {project.svg_file && (
            <div className="w-full max-w-[1400px] mx-auto mb-16 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              <img
                src={`${baseURL}${project.svg_file}`}
                alt={project.title || "Project preview"}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
      {suggestedProjects.length > 0 && (
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
          <div className="flex items-start justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-600 bg-clip-text text-transparent">
              Related Projects
            </h2>

            {suggestedProjects.length > 2 && (
              <button
                onClick={() => {
                  setShowAllSuggestions(!showAllSuggestions);
                  // Optional: scroll a bit down to see the expanded list smoothly
                  window.scrollTo({
                    top: window.scrollY + 300,
                    behavior: "smooth",
                  });
                }}
                className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 rounded-md text-white font-medium hover:from-blue-700 hover:to-purple-700 transition shadow-md"
              >
                {showAllSuggestions ? "Show Less" : "See More"}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {displayedProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => {
                  // When clicking a suggestion → go to that project + scroll top
                  navigate(`/project_details/${proj.id}`);
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900/60 to-gray-900/40 transition-all duration-500 hover:scale-[1.04] hover:shadow-2xl hover:shadow-blue-900/30 hover:border-6 hover:border-blue-600/50 cursor-pointer min-h-[520px] flex flex-col backdrop-blur-sm"
              >
                {/* Image Section */}
                <div className="relative h-[340px] overflow-hidden bg-black/40">
                  {proj.canvas_image ? (
                    <>
                      <img
                        src={`${baseURL}${proj.canvas_image}`}
                        alt={proj.title || "Project image"}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
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
                    {proj?.tag?.split(",")?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-1.5 text-xs font-medium text-gray-300 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
                      >
                        {normalizeCategory(tag.trim())}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                    {proj.title || "Untitled Project"}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed line-clamp-4 flex-1">
                    {proj.body || "No description available..."}
                  </p>
                </div>

                {/* Hover Overlay + View Project Button */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10 pointer-events-none group-hover:pointer-events-auto backdrop-blur-[2px]">
                  <button className="px-5 py-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-md transition-all">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>

          {suggestedProjects.length === 0 && showAllSuggestions && (
            <p className="text-center text-gray-400 mt-12 text-lg">
              No other related projects found at the moment.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export default ProjectDetails;