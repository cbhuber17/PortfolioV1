import { Navbar } from "../components";
import { motion } from "framer-motion";
import ParagraphHeader from "./../components/ParagraphHeader";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import ProjectCard from "./ProjectCard";

const Addendum = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <motion.div variants={textVariant()}>
        <ParagraphHeader pText="All Projects" hText="Addendum." style="" />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        All projects are shown below.
      </motion.p>
      {/* TODO: Sort ascending/descending by date created, or by popularity */}

      <motion.div variants={textVariant()}>
        <ParagraphHeader
          pText="All Certificates"
          hText="Extracurricular Learning."
          style=""
        />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        All certificates are shown below.
      </motion.p>
    </div>
  );
};

export default SectionWrapper(Addendum);
