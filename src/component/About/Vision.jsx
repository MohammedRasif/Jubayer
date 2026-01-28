"use client";
import image from "../../image/11.svg";
import image1 from "../../image/44.svg";
import image2 from "../../image/55.svg";
import image3 from "../../image/Image.png";
import { Lightbulb, Smartphone, Contact, Globe } from "lucide-react";

import saventyone from "../../image/saventyone.svg";
import jubayerPic from "../../image/jubayerPic.svg";

import CTA from "./CTA";

function Vision() {
  return (
    <div className="text-white">
      {/* Why Choose Me Section */}
      <section className="px-6 lg:px-16 py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="text-sm font-semibold text-gray-400 tracking-widest uppercase border border-gray-800 px-6 w-fit py-2.5 rounded-full bg-gray-900/50">
                Why Choose Me
              </div>

              <div className="flex gap-6 md:gap-8 items-start">
                <img
                  src={saventyone}
                  alt="Arrow"
                  className="w-16 md:w-20 lg:w-24 flex-shrink-0 mt-2"
                />
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.1] rozha bg-gradient-to-r from-[#FFFFFF] to-[#184AFA] bg-clip-text text-transparent">
                  Why I'm Your Ideal Design Partner
                </h2>
              </div>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                I design human-centered digital experiences that feel simple,
                clear, and easy to use. I've been working in the design field
                since 2023, starting my journey as a graphic designer and now
                focusing on UI/UX design. This background helps me combine
                strong visual sense with thoughtful, user-focused thinking. I
                care deeply about clarity, usability, and details, and I always
                aim to create interfaces that feel natural, intuitive, and
                genuinely helpful for real people.
              </p>
              {/* Divider */}
              <div className="h-[1px] bg-[#ACD4FF] my-6"></div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
                <img
                  src={jubayerPic}
                  alt="Designer at workspace"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20 mt-24">
            {/* Feature 1 */}
            <div className="flex gap-8 group">
              <div className="flex-shrink-0 w-16 h-16 bg-[#111827] border border-gray-800 rounded-2xl flex items-center justify-center text-white group-hover:border-[#0137fa]/50 transition-colors">
                <Lightbulb
                  size={32}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Product-First Mindset
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg lg:text-xl">
                  I design with a deep understanding of user needs, business
                  goals, and long-term product scalability—not just screens.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-8 group">
              <div className="flex-shrink-0 w-16 h-16 bg-[#111827] border border-gray-800 rounded-2xl flex items-center justify-center text-white group-hover:border-[#0137fa]/50 transition-colors">
                <Smartphone
                  size={32}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Clarity Over Complexity
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg lg:text-xl">
                  I simplify complex flows into intuitive, easy-to-use
                  experiences that users understand without friction.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-8 group">
              <div className="flex-shrink-0 w-16 h-16 bg-[#111827] border border-gray-800 rounded-2xl flex items-center justify-center text-white group-hover:border-[#0137fa]/50 transition-colors">
                <Contact
                  size={32}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  End-to-End Design Ownership
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg lg:text-xl">
                  From research and information architecture to UI and design
                  systems, I handle the complete design process.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-8 group">
              <div className="flex-shrink-0 w-16 h-16 bg-[#111827] border border-gray-800 rounded-2xl flex items-center justify-center text-white group-hover:border-[#0137fa]/50 transition-colors">
                <Globe
                  size={32}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Built for Real-World Use
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg lg:text-xl">
                  My designs are practical, developer-friendly, and ready to
                  ship—focused on usability, not just aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />

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
