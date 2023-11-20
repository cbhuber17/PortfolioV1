import { Navbar } from "../components";
import { useLanguage } from "../contexts/LanguageContext";
// import "./PageNotFound.module.css";

export default function PageNotFound() {
  const { isForeign } = useLanguage();

  return (
    <div className="relative z-0 bg-primary h-screen">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <h1 className="z-10 mt-[70px] text-center text-xl">
        {isForeign ? "Không Tìm Thấy Trang!" : "Page Not Found!"}
      </h1>

      <section className="noisecontainer">
        <svg className="svgcontainer">
          <filter id="noise">
            <feTurbulence id="turbulence">
              <animate
                attributeName="baseFrequency"
                dur="50s"
                values="0.9 0.9;0.8 0.8,0.9 0.9"
                repeatCount="indefinite"
              ></animate>
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              scale="60"
            ></feDisplacementMap>
          </filter>
        </svg>
      </section>
    </div>
  );
}
