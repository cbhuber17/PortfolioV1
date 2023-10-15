import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Higher Order Component that returns a function
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      // Add padding to sections on the portfolio page
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }} // quarter of a second
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* Render original component here */}
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
