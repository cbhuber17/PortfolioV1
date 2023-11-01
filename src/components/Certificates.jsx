import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import Certificate from "./Certificate";
import ParagraphHeader from "./ParagraphHeader";
import certificateStyles from "./Certificates.module.css";
import { certificates } from "../constants";

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
    </>
  );
};

export default SectionWrapper(Certificates);
