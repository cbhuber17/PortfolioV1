import { styles } from "../styles";
import { SatelliteCanvas } from "./canvas";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollIcon from "./ScrollIcon";

const Hero = () => {
  const { isForeign } = useLanguage();

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#000FCA]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {isForeign ? "Xin chào, tôi là" : "Hi, I am"}{" "}
            <span className="text-[#000FCA]">Colin</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            {isForeign
              ? "Hiện tại tôi đang sinh sống và làm việc tại Canada."
              : null}
            <br className="sm:block hidden" />
            {isForeign
              ? "Kỹ sư phần mềm nhân viên cấp cao, "
              : "Senior Staff Software Engineer, "}
            <br className="sm:block hidden" />
            {isForeign ? "Định vị & Điều hướng" : "Positioning & Navigation"}
          </p>
        </div>
      </div>
      {/* Canvas size of parent container */}
      <div className="max-sm:hidden w-full sm:h-1/2 absolute sm:bottom-40 h-1/3 bottom-24">
        <SatelliteCanvas />
      </div>

      <div className="sm:hidden flex justify-center items-center w-full h-full">
        <img
          src="src/assets/service_icons/satellite.png"
          alt="satellite"
          className="mx-auto"
        />
      </div>

      <ScrollIcon />
    </section>
  );
};

export default Hero;
