import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import image from "../../image/Frame 1.png";
import image1 from "../../image/Looper.svg";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_w60nke7";
    const TEMPLATE_ID = "template_qqb7wte";
    const PUBLIC_KEY = "3x-D7aGgY45UCDyUC";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      () => {
        alert("Something went wrong. Please try again later.");
      }
    );
  };

  return (
    <div id="hire_me" className="relative overflow-hidden">
      <div className="relative py-20">

        {/* Heading */}
        <div className="text-center flex flex-col items-center justify-center container mx-auto">
          <img src={image} alt="" />
          <h1 className="text-4xl font-semibold rozha bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent py-3">
            Let's Work Together
          </h1>
          <p className="text-[#64748B] text-xl max-w-2xl">
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>

        {/* Form + Info Section */}
        <div className="w-full max-w-7xl mx-auto mt-16 relative z-10 px-4">
          <div className="flex flex-col md:flex-row gap-10">

            {/* FORM — 3/4 */}
            <div className="w-full md:w-3/4 flex justify-center">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="w-full max-w-3xl"
              >
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="flex-1">
                    <label className="block text-gray-100 mb-2">Name</label>
                    <input
                      name="from_name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full px-6 py-3 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-md text-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-gray-100 mb-2">Email</label>
                    <input
                      name="reply_to"
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full px-6 py-3 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-md text-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition"
                    />
                  </div>
                </div>

                <div className="mb-10">
                  <label className="block text-gray-100 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="7"
                    required
                    placeholder="Write your message here..."
                    className="w-full px-6 py-3 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl text-white resize-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-md shadow-lg hover:scale-105 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* INFO — 1/4 */}
            <div className="w-full md:w-2/5 flex">
              <div className="w-full rounded-2xl border border-white/10 backdrop-blur-[2px] p-6 shadow-xl flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-white mb-8">
                  Or Get In Touch
                </h2>

                <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/20">
                    <FiMail className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">ahmadjubayerr@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 py-6 border-b border-white/10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/20">
                    <FiPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone / WhatsApp</p>
                    <p className="text-white">+880 1757976790</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/20">
                    <FiMapPin className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">
                      QCJ5+82M Aqua Tower, Dhaka 1212
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Background rotating shapes */}
        <img
          src={image1}
          className="absolute top-0 left-20 h-96 animate-[spin_20s_linear_infinite]"
          alt=""
        />
        <img
          src={image1}
          className="absolute bottom-10 right-20 h-96 animate-[spin_20s_linear_infinite]"
          alt=""
        />
      </div>
    </div>
  );
}

export default Contact;
