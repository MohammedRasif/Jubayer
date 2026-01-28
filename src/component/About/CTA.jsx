import projectInMindBg from "../../image/GetInTouch.jpg"

const CTA = () => {
    return (
        <>
            {/* CTA Section */}
      <section 
        className="px-6 lg:px-16 py-24 bg-contain bg-center bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: `url(${projectInMindBg})` }}
      >
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10  ">
          <h3 className="text-2xl lg:text-3xl font-semibold">Have a project in mind?</h3>
          <p className="text-gray-300 max-w-[524px] mx-auto text-lg leading-relaxed">
            Let's collaborate and create something amazing together. I'm always
            excited to work on challenging projects.
          </p>
          <button className="mt-4 px-10 py-3 bg-gradient-to-r from-[#3066FF] to-[#A14AFF] rounded-[12px] font-medium text-white shadow-lg hover:shadow-[0_0_30px_rgba(48,102,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
            Get in Touch
          </button>
        </div>
      </section>
        </>
    );
};

export default CTA;