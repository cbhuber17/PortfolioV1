import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParagraphHeader from "./ParagraphHeader";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <ParagraphHeader pText="My work" hText="Projects." style="" />
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="card-grid mt-20 flex flex-wrap gap-7">
        {/* Show top projects */}
        {projects.map((project, index) =>
          index < 6 ? (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ) : (
            ""
          )
        )}
      </div>
      <p className="mt-10">
        See complete list on the addendum page 👉{" "}
        <Link to="/addendum#projects" className="text-blue-300">
          addendum.
        </Link>{" "}
      </p>
    </>
  );
};

export default SectionWrapper(Works, "");
