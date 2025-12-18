import image1 from "../../image/1.png";
import image2 from "../../image/2.png";
import image3 from "../../image/3.png";
import image4 from "../../image/Screenshot_2 1.png";
import image5 from "../../image/Didiflow cover 1.png";

export default function ProjectCards() {
  const projects = [
    {
      id: 1,
      title: "Interaction Design",
      description:
        "Create designs that are not only visually appealing but also easy to use. My strength lies in combining creative and technical skills to build intuitive interfaces.",
      image: image4,
      images: image1,
      number: "1",
    },
    {
      id: 2,
      title: "Interaction Design",
      description:
        "Create designs that are not only visually appealing but also easy to use. My strength lies in combining cr",
      image: image5,
      images: image2,
      number: "2",
    },
    {
      id: 3,
      title: "Interaction Design",
      description:
        "Create designs that are not only visually appealing but also easy to use.",
      image: image4,
      images: image3,
      number: "3",
    },
  ];

  return (
    <div className="w-full py-12">
      <div className="flex gap-6  mx-auto">
        {/* First Card */}
        <div className="w-3/8">
          <div className="group relative bg-[#17223AED] rounded-2xl overflow-hidden h-full min-h-96 hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full px-5 pt-5 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-end  ">
              <img
                src={projects[0].images}
                className="h-40 drop-shadow-2xl"
                alt=""
              />
            </div>
            <div className="absolute top-8 right-8 text-8xl md:text-9xl font-bold text-slate-700 opacity-10 pointer-events-none">
              {projects[0].number}
            </div>

            <div className="p-6 md:p-8 pt-16">
              {" "}
              <h3 className="text-[20px] md:text-[22px] font-semibold text-white mb-4">
                {projects[0].title}
              </h3>
              <div className="flex justify-between items-end">
                <p className="text-slate-400 text-[18px] md:text-base leading-relaxed line-clamp-3 pr-4">
                  {projects[0].description}
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors whitespace-nowrap">
                  See more →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-2/6">
          <div className="group relative bg-[#17223AED] rounded-2xl overflow-hidden h-full hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="w-full h-full px-5 pt-5 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-end  ">
              <img
                src={projects[1].images}
                className="h-40 drop-shadow-2xl"
                alt=""
              />
            </div>

            <div className="absolute top-4 right-4 text-7xl font-bold text-slate-700 opacity-10 pointer-events-none">
              {projects[1].number}
            </div>

            <div className="p-5 pt-16">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-white mb-4">
                {projects[1].title}
              </h3>

              <div className="flex justify-between items-end">
                <p className="text-slate-400 text-[18px] leading-relaxed line-clamp-2 pr-4">
                  {projects[1].description}
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors whitespace-nowrap">
                  See more →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="w-2/8">
          <div className="group relative bg-[#17223AED] rounded-2xl overflow-hidden h-full hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={projects[2].image}
                alt={projects[2].title}
                className="w-full h-full px-5 pt-5 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-end ">
              <img
                src={projects[2].images}
                className="h-40 drop-shadow-2xl"
                alt=""
              />
            </div>

            <div className="absolute top-3 right-3 text-6xl font-bold text-slate-700 opacity-10 pointer-events-none">
              {projects[2].number}
            </div>

            <div className="p-4 pt-16">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-white mb-4">
                {projects[2].title}
              </h3>

              <div className="flex justify-between items-end">
                <p className="text-slate-400 text-[18px] leading-relaxed line-clamp-2 pr-4">
                  {projects[2].description}
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 text-xs md:text-sm font-semibold transition-colors whitespace-nowrap">
                  See more →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
