import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import Certificate from "./Certificate";
import ParagraphHeader from "./ParagraphHeader";
import certificateStyles from "./Certificates.module.css";
import { certificates } from "../constants";

// eslint-disable-next-line react-refresh/only-export-components
const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <ParagraphHeader pText="Education" hText="Certificates" style="" />
      </motion.div>

      <div className="w-full flex mb-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Below you will find my credentials and certificates over the years.
        </motion.p>
      </div>

      <div className={certificateStyles.container}>
        {certificates.map((certificate, index) => (
          <Certificate key={index} {...certificate} />
        ))}
      </div>
      <p className="mt-10">
        See complete list on the addendum page 👉{" "}
        <Link to="/addendum#certificates" className="text-blue-300">
          addendum.
        </Link>{" "}
      </p>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Certificates);
