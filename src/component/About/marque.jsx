export default function Marquee() {
  const items = [
    "User Interface (UI) Design",
    "User Experience (UX) Design",
    "Wireframe & Prototype",
    "Responsive Design",
  ];

  return (
    <div className="w-full bg-slate-900 py-8 space-y-30 overflow-hidden ">
      <div className="overflow-hidden rotate-3 pt-2">
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

        <div className="marquee-ltr flex whitespace-nowrap">
          {[...items, ...items, ...items].map((item, index) => (
            <div key={`ltr-${index}`} className="flex items-center gap-6 px-8">
              <span className="text-white text-lg font-medium">{item}</span>
              <span className="text-blue-400 text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden -rotate-3">
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
            animation: scroll-right-to-left 20s linear infinite;
          }
          
          .marquee-rtl:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="marquee-rtl flex whitespace-nowrap">
          {[...items, ...items].map((item, index) => (
            <div key={`rtl-${index}`} className="flex items-center gap-6 px-8">
              <span className="text-white text-lg font-medium">{item}</span>
              <span className="text-blue-400 text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}