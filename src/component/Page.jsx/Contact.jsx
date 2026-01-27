import React, { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget this import!
import image from "../../image/Frame 1.png";
import image1 from "../../image/Looper.svg";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Collect form data
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("from_name"),
      email: formData.get("reply_to"),
      message: formData.get("message"),
    };

    try {
      const response = await axios.post(
        "https://ahmadjubayerr.pythonanywhere.com/api/contact/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Success
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 4000,
      });

      form.current.reset(); // Clear form
    } catch (error) {
      console.error("Error sending message:", error);

      const errorMsg =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong. Please try again later.";

      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
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
                  disabled={isLoading}
                  className={`w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-md shadow-lg hover:scale-105 transition ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* INFO — 1/4 (unchanged) */}
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

        {/* Background rotating shapes (unchanged) */}
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

      {/* Toastify Container - place it here or in your root layout */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // or "light" / "colored"
      />
    </div>
  );
}

export default Contact;