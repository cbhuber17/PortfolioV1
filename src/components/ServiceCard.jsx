import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useLanguage } from "../contexts/LanguageContext";

/* eslint react/prop-types: 0 */
const ServiceCard = ({ index, title, titlevn, icon }) => {
  const { isForeign } = useLanguage();

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-blue-gradient p-[1px] rounded-[20px] shadow-card"
      >
        {/* Tilt options */}
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-25 h-25 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {isForeign ? titlevn : title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
