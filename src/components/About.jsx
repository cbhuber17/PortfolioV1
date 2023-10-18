import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ParagraphHeader from "./ParagraphHeader";
import ServiceCard from "./ServiceCard";
import SectionWrapper from "../hoc/SectionWrapper";
import { shuffle } from "../utils/shuffle";

const About = () => {
  shuffle(services);
  return (
    <>
      <motion.div variants={textVariant()}>
        <ParagraphHeader pText="Introduction" hText="Overview." style="" />
      </motion.div>

      {/* Direction, type, delay(s), duration(s) */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome! I am a lead GNSS software tester with more than 15 years of
        experience working with testing and developing GNSS products. I have
        mastered the use of GNSS simulators to effectively test and improve the
        quality of products.
        <br />
        <br /> I value being organized and implementing 5S/6S office routines. I
        also look for methods of continuous improvement, innovation, and
        advancing my own education, which is the foundation of being an
        engineer.
        <br />
        <br /> I choose to set quality standards to “very high” to meet
        customer’s expectations and deliverables and this is what drives
        success. I am not afraid to speak up to call out violations in processes
        and threats to quality! Finding those software bugs is what excites me
        the most about being a software tester.
        <br />
        <br /> I have founded a new passion with full stack web development and
        cloud solutions via AWS. Bringing the complex nature of the web to
        people’s devices using modern techniques is incredibly exciting and
        challenging. There is unlimited potential as to what can be brought to
        the world with full stack skills, perhaps one day having GNSS on the
        cloud! The learning never stops, so let’s keep it going!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// export default About;
export default SectionWrapper(About, "about");
