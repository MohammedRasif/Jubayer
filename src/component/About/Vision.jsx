"use client";
import image from "../../image/11.svg";
import image1 from "../../image/44.svg";
import image2 from "../../image/55.svg";
import image3 from "../../image/Image.png";


import CTA from "./CTA";

function CircularProgress({
  percentage,
  label,
  color,
  size = 90,
  strokeWidth = 8,
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#374151" // gray-700
            strokeWidth={strokeWidth}
          />

          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Percentage in center */}
        <div
          className="absolute inset-0 flex items-center justify-center font-bold text-xl"
          style={{ color }}
        >
          {percentage}%
        </div>
      </div>
      <span className="text-sm font-medium text-gray-300">{label}</span>
    </div>
  );
}

function Vision() {
  return (
    <div className="text-white">
      {/* Why Choose Me Section */}
      <section className="px-6 lg:px-16 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="text-sm font-semibold text-gray-400 tracking-widest uppercase border px-5 w-44 py-2 rounded-full">
                Why Choose Me
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight rozha bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent">
                Why I'm Your Ideal Design Partner
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I create designs that are not only visually appealing but also
                easy to use. My strength lies in combining creative thinking
                with user-centered design to craft digital experiences and
                visuals that truly connect with people. With skills in UI/UX and
                Graphic Design, I focus on delivering clean, modern, and
                impactful work that makes brands stand out.
              </p>

              <div className="pt-6">
                <h3 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4">
                  Tools & Software
                </h3>
                <div className="flex flex-wrap gap-6 justify-start">
                  {[
                    { name: "Figma", percentage: 76, color: "#8B5CF6" },
                    { name: "XD", percentage: 98, color: "#EC4899" },
                    { name: "Ps", percentage: 98, color: "#06B6D4" },
                    { name: "AI", percentage: 98, color: "#F97316" },
                    { name: "Id", percentage: 90, color: "#EF4444" },
                    { name: "Cursor", percentage: 90, color: "#FFFFFF" },
                    { name: "Ae", percentage: 98, color: "#A78BFA" },
                  ].map((tool, i) => (
                    <CircularProgress
                      key={i}
                      label={tool.name}
                      percentage={tool.percentage}
                      color={tool.color}
                      size={90}
                      strokeWidth={8}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/designer-at-desk-workspace.jpg"
                  alt="Designer at workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <CTA/>



      {/* Vision & Philosophy Section */}
      <section className="px-6 lg:px-16 py-20 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="text-sm font-semibold text-gray-400 tracking-widest uppercase border px-10 w-66 py-2 rounded-full">
                Vision & Philosophy
              </div>
              <h2 className="text-4xl font-semibold leading-tight">
                Empowering businesses through innovative and user-centered
                design, creating digital experiences that leave a lasting
                impact.
              </h2>
              <p className="text-white">
                I don't just design screens; I design outcomes. My goal is to
                bridge the gap between complex technology and human intuition,
                creating digital experiences that are as effective as they are
                beautiful.
              </p>

              {/* Philosophy Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 ">
                <img src={image} className="h-32 w-68" alt="" />
                <img src={image1} className="h-32 w-68" alt="" />
                <img src={image2} className="h-32 w-68" alt="" />
              </div>
            </div>

            {/* Right Placeholder */}
            
            <div className="ml-20 ">
                <img src={image3} className="h-[46vh]" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vision;
