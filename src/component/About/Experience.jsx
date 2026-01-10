import { Briefcase, BookOpen, Award } from "lucide-react";

function Experience() {
  return (
    <div className="min-h-screen  text-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
            EXPERIENCE, EDUCATION & CERTIFICATIONS
          </p>
        </div>

        <div className="max-w-6xl mx-auto py-20 text-white">
          <div className="space-y-14">
            {/* Experience */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
              <h3 className="text-sm font-semibold text-gray-300 flex items-start gap-2">
                <span className="text-blue-400">▢</span> My Experience:
              </h3>

              <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <span className="text-blue-400">•</span> Junior UI/UX
                    Designer
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Jan 2022 – Jul 2023 • Present
                  </p>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    Designed UI components, collaborated with developers, and
                    created user-centered design solutions.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <span className="text-blue-400">•</span> Graphic Designer
                    (Remote)
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Freelance • Dec 2020 – March 2023
                  </p>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    Created branding, marketing visuals, and social media assets
                    for international clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
              <h3 className="text-sm font-semibold text-gray-300 flex items-start gap-2">
                <span className="text-blue-400">▢</span> My Education:
              </h3>

              <div className="md:col-span-3">
                <h4 className="text-sm font-semibold flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  Bachelor of Arts (Honors) in Economics
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  National University of Bangladesh
                </p>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Studied economic theory, data analysis, and market research
                  with practical academic projects.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <h3 className="text-sm font-semibold text-gray-300 flex items-start gap-2">
                <span className="text-blue-400">▢</span> My Certifications:
              </h3>

              <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <span className="text-blue-400">•</span> UX Design
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Creative IT Institute • 2024
                  </p>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    UX research, wireframing, prototyping, and usability
                    testing.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <span className="text-blue-400">•</span> Graphic Design
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Creative IT Institute • 2023
                  </p>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    Branding, typography, color theory, and advanced visual
                    design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">
              MY SKILLS
            </p>
            <h2 className="text-5xl font-bold mb-8 rozha">
              Key Expertise in UI/UX Excellence
            </h2>
          </div>

          {/* Two columns of skills */}
          <div className="grid grid-cols-2 gap-10">
            {/* Left Skills Column */}
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-300">
                    Expertise in UI/UX
                  </p>
                  <span className="text-xs text-gray-400">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-300">
                    User Experience (UX) Design
                  </p>
                  <span className="text-xs text-gray-400">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-300">
                    Wireframes & Prototypes
                  </p>
                  <span className="text-xs text-gray-400">88%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "88%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-300">
                    Responsive Web Design
                  </p>
                  <span className="text-xs text-gray-400">92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-300">
                    Interaction Design
                  </p>
                  <span className="text-xs text-gray-400">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Right Skills Column */}
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-300">Figma</p>
                  <span className="text-xs text-gray-400">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-300">Adobe XD</p>
                  <span className="text-xs text-gray-400">88%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "88%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-300">
                    Adobe Photoshop
                  </p>
                  <span className="text-xs text-gray-400">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-300">HTML/CSS</p>
                  <span className="text-xs text-gray-400">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-300">
                    Adobe InDesign
                  </p>
                  <span className="text-xs text-gray-400">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-[#17223AED] py-16 mt-20">
        <h3 className="text-2xl font-bold mb-3">Have a project in mind?</h3>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Let's collaborate and create something amazing together. The best
          results are created through teamwork and innovation.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
          Let's Talk
        </button>
      </div>
    </div>
  );
}

export default Experience;
