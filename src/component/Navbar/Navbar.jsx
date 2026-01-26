import { useState, useEffect, useRef } from "react";
import selectedBg from "../../image/EllipseSelected.svg";
import nonSelectedBg from "../../image/EllipseNonSelected 1.svg";
import image1 from "../../image/Home Logo.svg";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const routes = [
    { label: "Home", path: "/" },
    { label: "Project", path: "/project" },
    { label: "About Me", path: "/about" },
    { label: "Service", path: "/asdf" },
  ];

  const [rotation, setRotation] = useState(0);
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorRef = useRef(null);
  const cursorTrailRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const location = useLocation();

  useEffect(() => {
    const activeIndex = routes.findIndex((r) => r.path === location.pathname);
    if (activeIndex !== -1) {
      setRotation(-activeIndex * (360 / routes.length));
    }
  }, [location.pathname, routes]);

  // Mouse move + smooth cursor animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animateCursor = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.35;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.35;

      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.12;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
      }
      if (cursorTrailRef.current) {
        cursorTrailRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const animationId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const angleStep = 360 / routes.length;

  const handleRouteClick = (index) => {
    setRotation(-index * angleStep);
  };

  return (
    <>
      {/* ===================== CUSTOM CURSOR ===================== */}
      {/* Main glowing cursor - সবচেয়ে উপরে */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 left-0 top-0"
      >
        <div
          className={`absolute inset-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl transition-all duration-300 ${
            cursorVariant === "hover" ? "w-12 h-12" : "w-8 h-8"
          }`}
        />
        <div
          className={`absolute inset-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40 blur-lg transition-all duration-300 ${
            cursorVariant === "hover" ? "w-8 h-8" : "w-6 h-6"
          }`}
        />
        <div
          className={`relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-200 ${
            cursorVariant === "hover"
              ? "w-3 h-3 shadow-[0_0_25px_rgba(147,51,234,0.9),0_0_50px_rgba(59,130,246,0.7),0_0_75px_rgba(147,51,234,0.4)]"
              : "w-2 h-2 shadow-[0_0_15px_rgba(147,51,234,0.7),0_0_30px_rgba(59,130,246,0.5),0_0_45px_rgba(147,51,234,0.3)]"
          }`}
        />
      </div>

      {/* Trailing glass circle */}
      <div
        ref={cursorTrailRef}
        className="fixed pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 left-0 top-0"
      >
        <div
          className={`rounded-full transition-all duration-500 relative ${
            cursorVariant === "hover" ? "w-16 h-16" : "w-10 h-10"
          }`}
        >
          <div
            className={`absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-2xl transition-all duration-500 ${
              cursorVariant === "hover" ? "scale-110 opacity-80" : "scale-100 opacity-50"
            }`}
          />
          <div
            className={`absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 blur-xl transition-all duration-500 ${
              cursorVariant === "hover" ? "scale-105 opacity-70" : "scale-100 opacity-50"
            }`}
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-25 blur-sm" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-35" />
          <div
            className={`absolute inset-[2px] rounded-full bg-gradient-to-br from-[#081228]/30 via-[#081228]/40 to-[#081228]/30 backdrop-blur-md transition-all duration-500 ${
              cursorVariant === "hover"
                ? "shadow-[inset_0_0_20px_rgba(147,51,234,0.2),inset_0_0_10px_rgba(59,130,246,0.15)]"
                : "shadow-[inset_0_0_10px_rgba(147,51,234,0.1)]"
            }`}
          />
          <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/8 via-transparent to-transparent opacity-50" />
          <div
            className={`absolute inset-[4px] rounded-full bg-gradient-to-r from-blue-500/8 to-purple-500/8 blur-md transition-all duration-500 ${
              cursorVariant === "hover" ? "opacity-80" : "opacity-40"
            }`}
          />
        </div>
      </div>

      {/* ===================== NAVBAR ===================== */}
      <div className="fixed top-10 right-14 z-[999] cursor-none">
        <div className="flex items-center justify-center backdrop-blur-[2px] rounded-full">
          <div className="relative w-[240px] h-[240px]">
            <div
              className="absolute inset-0 will-change-transform"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {routes.map((route, index) => {
                const angle = index * angleStep;
                const radian = (angle - 90) * (Math.PI / 180);
                const radius = 100;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;

                const normalizedAngle = (((angle + rotation) % 360) + 360) % 360;
                const isActive = normalizedAngle < 3 || normalizedAngle > 357;

                return (
                  <NavLink
                    key={route.path}
                    to={route.path}
                    onClick={() => handleRouteClick(index)}
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                    className="absolute left-1/2 top-1/2 z-10 hover:scale-110 transition-transform duration-300 w-[240px] h-[140px] flex items-center justify-center"
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}deg)`,
                      transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s ease",
                    }}
                  >
                    <div
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-transform duration-500 ${
                        !isActive ? "rotate-180" : ""
                      }`}
                    >
                      <img
                        src={isActive ? selectedBg : nonSelectedBg}
                        className="bg-cover bg-center transition-all duration-300"
                        style={{
                          width: isActive ? "136px" : "120px",
                          height: isActive ? "66px" : "55px",
                        }}
                        alt=""
                      />
                    </div>

                    <div
                      className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none ${
                        isActive ? "translate-y-[1px]" : "translate-y-[2px]"
                      }`}
                    >
                      <svg width="120" height="60" viewBox="0 0 120 60" className="overflow-visible">
                        <defs>
                          <path id={`curve-${index}`} d="M 12,42 Q 60,10 108,42" fill="transparent" />
                        </defs>
                        <text
                          className={`font-semibold tracking-wider ${
                            isActive ? "fill-white" : "fill-gray-400/80"
                          }`}
                          style={{
                            transition: "all 0.3s ease",
                            fontSize: isActive ? "15px" : "14px",
                            fontWeight: isActive ? "600" : "500",
                          }}
                        >
                          <textPath href={`#curve-${index}`} startOffset="50%" textAnchor="middle">
                            {route.label}
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </NavLink>
                );
              })}
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center pointer-events-none z-20">
              <div className="w-full h-full rounded-2xl  flex items-center justify-center relative overflow-hidden">
                <img src={image1} className="w-12 h-14" alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;