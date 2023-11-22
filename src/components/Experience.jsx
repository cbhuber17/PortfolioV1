import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import ParagraphHeader from "./ParagraphHeader";
import ExperienceCard from "./ExperienceCard";
import { useLanguage } from "../contexts/LanguageContext";
import useWindowDimensions from "../hooks/useWindowDimensions";

// eslint-disable-next-line react-refresh/only-export-components
const Experience = () => {
  const { isForeign } = useLanguage();
  const { width } = useWindowDimensions();
  let isMobile = false;

  if (width < 1024) isMobile = true;

  return (
    <>
      {isMobile ? (
        <div>
          <ParagraphHeader
            pText={
              isForeign
                ? "Những gì tôi đã làm cho đến nay"
                : "What I have done so far"
            }
            hText={isForeign ? "Kinh Nghiệm Làm Việc" : "Work Experience."}
            style="text-center"
          />
        </div>
      ) : (
        <motion.div variants={textVariant()}>
          <ParagraphHeader
            pText={
              isForeign
                ? "Những gì tôi đã làm cho đến nay"
                : "What I have done so far"
            }
            hText={isForeign ? "Kinh Nghiệm Làm Việc" : "Work Experience."}
            style="text-center"
          />
        </motion.div>
      )}

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Experience, "work");
