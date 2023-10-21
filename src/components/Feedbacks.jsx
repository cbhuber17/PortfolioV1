import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { testimonials } from "../constants";

import ParagraphHeader from "./ParagraphHeader";
import FeedbackCard from "./FeedbackCard";

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-emerald-900 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <ParagraphHeader
            pText="What others say"
            hText="Testimonials."
            style=""
          />
        </motion.div>
      </div>
      {/* Negative margin to push the cards onto the testimonials div */}
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
