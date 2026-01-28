export default function Marquee() {
  const items = [
    "User Interface (UI) Design",
    "User Experience (UX) Design",
    "Wireframe & Prototype",
    "Responsive Design", 
    "Interaction Design",
    "Design Systems",
    "Usability Testing",
    "Information Architecture",
    "Visual Design",
    "Accessibility Design",
    "Mobile App Design",
    "Website Design",
    "Product Design",
    "User Research",
    "UX Strategy" ,
    "Prototyping" ,
    "dashboard"
  ];

  return (
    <div className="w-full  py-11 space-y-30 overflow-hidden bg-[#162139]">
      <div className="overflow-hidden rotate-4  bg-[#0f172a] py-2">
        <style>{`
          @keyframes scroll-left-to-right {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0);
            }
          }
          
          .marquee-ltr {
            animation: scroll-left-to-right 18s linear infinite;
          }
          
          .marquee-ltr:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="marquee-ltr  flex whitespace-nowrap">
          {[...items, ...items, ...items].map((item, index) => (
            <div key={`ltr-${index}`} className="flex items-center gap-4 px-2">
              <span className="text-white text-lg font-medium">{item}</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden -rotate-4  bg-[#0f172a] py-2 ">
        <style>{`
          @keyframes scroll-right-to-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .marquee-rtl {
            animation: scroll-right-to-left 18s linear infinite;
          }
          
          .marquee-rtl:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="marquee-rtl flex whitespace-nowrap">
          {[...items, ...items].map((item, index) => (
            <div key={`rtl-${index}`} className="flex items-center gap-4 px-2">
              <span className="text-white text-lg font-medium">{item}</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

