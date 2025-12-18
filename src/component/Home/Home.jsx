import About from "../Page.jsx/About";
import Banner from "../Page.jsx/banner";
import Choose from "../Page.jsx/Choose";
import Contact from "../Page.jsx/Contact";
import Gallery from "../Page.jsx/Gallery";
import Project from "../Page.jsx/Project";

const Home = () => {
    return (
        <div className="bg-[#081228] text-white">
            <Banner />
            <Project/>
            <About/>
            <Choose/>
            <Gallery/>
            <Contact/>
        </div>
    );
}

export default Home;
