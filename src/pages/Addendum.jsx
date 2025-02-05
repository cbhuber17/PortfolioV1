import { Footer, Navbar } from "../components";
import RandomQuote from "../components/RandomQuote";
import AllProjects from "../components/AllProjects";
import ComputerCanvas from "../components/canvas/Computers";
// import AllCertificates from "../components/AllCertificates";
import { styles } from "../styles";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollIcon from "../components/ScrollIcon";

const Addendum = () => {
  const { isForeign } = useLanguage();
  return (
    <div className="relative z-0 bg-primary" id="projects">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <div className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#000FCA]" />
            <div className="w-1 sm:h-80 h-40 blue-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              {isForeign ? "Dự án" : "Projects"}
            </h1>
            <p className={`${styles.heroSubText} text-white-100`}>
              {isForeign
                ? "Biến ý tưởng thành trải nghiệm trực tuyến phong phú"
                : "Transforming ideas into immersive online experiences"}
              <br />
              {isForeign
                ? "Trưng bày một loạt các giải pháp kỹ thuật số năng động"
                : "Showcasing a dynamic range of digital solutions"}
            </p>
          </div>
        </div>
        <ComputerCanvas />
        <ScrollIcon />

        <div className="lg:hidden flex justify-center items-center w-full h-full">
          <img src="/desktop.png" alt="satellite" className="mx-auto mt-40" />
        </div>
      </div>
      <AllProjects />
      <br />
      {/* <AllCertificates /> */}
      <RandomQuote />
      <Footer />
    </div>
  );
};

export default Addendum;
