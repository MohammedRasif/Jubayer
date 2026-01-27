import { Briefcase, BookOpen, Award } from "lucide-react";
import Choose from "../Page.jsx/Choose";
import image from "../../image/exparicen.png";
import { MdOutlineWorkOutline } from "react-icons/md";

import experiance from "../../image/experiance.svg";
import Certifications from "../../image/Certifications.svg";
import Education from "../../image/Education.svg";                     
import Certificate from "../../image/Certificate.svg";                     

function Experience() {
  return (
    <div className=" text-white pb-10 pt-5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-center jus mb-16">
          <img src={image} alt="" className="h-10" />
        </div>

        <div className="max-w-7xl mx-auto pb-10 text-white">
          <div className="space-y-14">
            {/* Experience */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
              <h3 className="text-[30px] font-semibold text-gray-50 flex items-center gap-4 ">
                <img src={experiance} alt="" className="h-8 w-8" />
                My Experience:
              </h3>

              <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-[20px] font-semibold flex items-center gap-2">
                    <span className="text-blue-400">•</span> Junior UI/UX
                    Designer
                  </h4>
                  <p className="text-[16px] text-gray-400 mt-1">
                    Jan 2022 – Jul 2023 • Present
                  </p>
                  <p className="text-[16px] text-gray-400 leading-relaxed">
                    Designed UI components, collaborated with developers, and
                    created user-centered design solutions.
                  </p>
                </div>

                <div>
                  <h4 className="text-[20px] font-semibold flex items-center gap-2">
                    <span className="text-blue-400">•</span> Graphic Designer
                    (Remote)
                  </h4>
                  <p className="text-[16px] text-gray-400 mt-1">
                    Freelance • Dec 2020 – March 2023
                  </p>
                  <p className="text-[16px] text-gray-400 leading-relaxed">
                    Created branding, marketing visuals, and social media assets
                    for international clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
              <h3 className="text-[30px] font-semibold text-gray-50 flex items-center gap-4">
                <img src={Education} alt="" className="h-8 w-8" /> 
                My Education:
              </h3>

              <div className="md:col-span-3">
                <h4 className="text-[20px] font-semibold flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  Bachelor of Arts (Honors) in Economics
                </h4>
                <p className="text-[16px] text-gray-400 mt-1">
                  National University of Bangladesh
                </p>
                <p className="text-[16px] text-gray-400 leading-relaxed">
                  Studied economic theory, data analysis, and market research
                  with practical academic projects.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <h3 className="text-[30px] font-semibold text-gray-50 flex items-center gap-4">
                <img src={Certifications} alt="" className="h-8 w-8" /> 
                My Certifications:
              </h3>

              <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-[20px] font-semibold flex items-center gap-2">
                    <span className="text-blue-400">•</span> UX Design
                  </h4>
                  <p className="text-[16px] text-gray-400 mt-1">
                    Creative IT Institute • 2024
                  </p>
                  <p className="text-[16px] text-gray-400 leading-relaxed">
                    UX research, wireframing, prototyping, and usability
                    testing.
                  </p>

                  <div className="relative group inline-block mt-4 cursor-pointer">
                    <p className="text-[18px] font-medium bg-gradient-to-r from-[#3066FF] to-[#A14AFF] bg-clip-text text-transparent">
                      Certificate
                    </p>
                    <div className="h-[1.5px] w-full bg-gradient-to-r from-[#3066FF] to-[#A14AFF] "></div>
                    
                    {/* Certificate Tooltip/Preview */}
                    <div className="absolute bottom-full left-0 mb-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50 origin-bottom-left">
                      <div className="p-2 bg-[#1a1c2e]/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[350px]">
                        <img 
                          src={Certificate} 
                          alt="Certificate Preview" 
                          className="w-full h-auto rounded-lg shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[20px] font-semibold flex items-center gap-2">
                    <span className="text-blue-400">•</span> Graphic Design
                  </h4>
                  <p className="text-[16px] text-gray-400 mt-1">
                    Creative IT Institute • 2023
                  </p>
                  <p className="text-[16px] text-gray-400 leading-relaxed">
                    Branding, typography, color theory, and advanced visual
                    design.
                  </p>
                  <div className="relative group inline-block mt-4 cursor-pointer">
                    <p className="text-[18px] font-medium bg-gradient-to-r from-[#3066FF] to-[#A14AFF] bg-clip-text text-transparent">
                      Certificate
                    </p>
                    <div className="h-[1.5px] w-full bg-gradient-to-r from-[#3066FF] to-[#A14AFF]"></div>

                    {/* Certificate Tooltip/Preview */}
                    <div className="absolute bottom-full left-0 mb-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50 origin-bottom-left">
                      <div className="p-2 bg-[#1a1c2e]/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[350px]">
                        <img 
                          src={Certificate} 
                          alt="Certificate Preview" 
                          className="w-full h-auto rounded-lg shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          
          

          {/* Two columns of skills */}
         
        </div>
      </div>
      {/* <div className="text-center bg-[#17223AED] py-16 mt-20">
        <h3 className="text-2xl font-bold mb-3">Have a project in mind?</h3>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Let's collaborate and create something amazing together. The best
          results are created through teamwork and innovation.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
          Let's Talk
        </button>
      </div> */}
    </div>
  );
}

export default Experience;
