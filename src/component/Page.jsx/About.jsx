import image from "../../image/Id Card.png";
import image1 from "../../image/logos_adobe-indesign.png";
import image2 from "../../image/logos_adobe-xd.png";
import image3 from "../../image/skill-icons_illustrator.png";
import image4 from "../../image/skill-icons_photoshop.png";
import image6 from "../../image/devicon_figma.png";
import image5 from "../../image/Frame 10000040.png";

function About() {
  return (
    <div className="container mx-auto py-8">
      <div className="min-h-screen flex lg:pb-10">
        <div className="relative w-full ">
          <img
            src={image}
            alt="My ID Card"
            className="w-full h-auto rounded-lg shadow-2xl object-cover"
          />

          <div className="absolute top-60 left-80  ">
            <img src={image5} alt="" />
            <h1 className="text-3xl font-semibold py-5">Hi, I'm Jubayer</h1>
            <p className="text-[#64748B] text-[20px]">
              I am an UI/UX Designer and I design because I love solving
              problems, questioning 'why, and making things feel right. UI/UX
              isn't just about screens, it's about people, habits, and the tiny
              details that make a product worth using. It's not just about
              looking good; it's about feeling effortless. If it makes sense
              without overthinking, I've done my job.
            </p>
            <div className="  text-gray-200 py-7">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* ==================== Work Experience ==================== */}
                  <div className="space-y-10">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                      Work Experience
                    </h2>

                    {/* Job 1 */}
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-0 w-5 h-5 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
                      <div className="absolute left-[9px] top-4 w-0.5 h-full bg-gray-700"></div>

                      <p className="text-cyan-400 text-sm font-medium">
                        April 2025 – Present
                      </p>
                      <h3 className="text-xl font-semibold text-white">
                        Junior UI/UX Designer
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Join Venture AI (JVA)
                      </p>
                      <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                        Guiding UI interns, collaborating on app and web design
                        projects, and contributing to UX strategy and design
                        systems.
                      </p>
                    </div>

                    {/* Job 2 */}
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-0 w-5 h-5 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
                      <div className="absolute left-[9px] top-4 w-0.5 h-full bg-gray-700"></div>

                      <p className="text-cyan-400 text-sm font-medium">
                        December 2023 – March 2025
                      </p>
                      <h3 className="text-xl font-semibold text-white">
                        Graphic Designer (Remote)
                      </h3>
                      <p className="text-gray-400 text-sm">Future IT Center</p>
                      <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                        Created brand identities, marketing materials, packaging
                        and social media content for startups and small
                        businesses.
                      </p>
                    </div>
                  </div>

                  {/* ==================== Education & Certifications ==================== */}
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-white mb-8">
                      Education & Certifications
                    </h2>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Education
                      </h3>
                      <p className="mt-mt-1 text-cyan-300">
                        Bachelor of Arts (Honors) in Economics
                      </p>
                      <p className="text-gray-400 text-sm">
                        National University (Running Student)
                      </p>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Certifications
                      </h3>
                      <ul className="space-y-3 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          UI/UX Design Certification from Creative IT Institute
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          Graphic Design Certification from Creative IT
                          Institute & Sheikh Kamal IT
                        </li>
                      </ul>
                    </div>

                    <div className="mt-10">
                      <div className="mt-10">
                        <h3 className="text-lg font-semibold text-white mb-6">
                          Tools & Software
                        </h3>
                        <div className="flex flex-wrap gap-5 items-center justify-start">
                          <img
                            src={image6}
                            alt="Figma"
                            className="w-11 h-9 object-contain hover:scale-110 transition"
                          />
                          <img
                            src={image2}
                            alt="Adobe XD"
                            className="w-11 h-11 object-contain hover:scale-110 transition"
                          />
                          <img
                            src={image3}
                            alt="Photoshop"
                            className="w-11 h-11 object-contain hover:scale-110 transition"
                          />
                          <img
                            src={image4}
                            alt="Illustrator"
                            className="w-11 h-11 object-contain hover:scale-110 transition"
                          />
                          <img
                            src={image1}
                            alt="InDesign"
                            className="w-11 h-11 object-contain hover:scale-110 transition"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ==================== Expertise in UI/UX ==================== */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                      Expertise in UI/UX
                    </h2>

                    {[
                      { skill: "User Interface (UI)", percent: 95 },
                      { skill: "User Experience (UX)", percent: 80 },
                      { skill: "Wireframe & Prototype", percent: 88 },
                      { skill: "Usability Testing", percent: 92 },
                      { skill: "Responsive Web Design", percent: 75 },
                      { skill: "Interaction Design", percent: 90 },
                    ].map((item) => (
                      <div key={item.skill}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-300">
                            {item.skill}
                          </span>
                          <span className="text-sm text-cyan-400 font-medium">
                            {item.percent}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                          <div
                            className="h-full bg-[#64748B] rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${item.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
