import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import PeriodicTech from "./PeriodicTech";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useLanguage } from "../contexts/LanguageContext";
import { shuffle } from "../utils/shuffle";
import useWindowDimensions from "../hooks/useWindowDimensions";

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  const { isForeign } = useLanguage();
  const { width } = useWindowDimensions();
  let isMobile = false;
  let mobileTech = null;

  if (technologies.length != 36) {
    console.log(
      `36 Techs (6 blank) required to fill periodic table: ${technologies.length}`
    );
    return;
  }

  if (width < 1024) isMobile = true;

  // If mobile, remove blanks
  if (isMobile) {
    mobileTech = technologies.filter((tech) => tech.short !== "");
  }

  const tech = isMobile ? mobileTech : technologies;

  const gridLayout = isMobile
    ? "grid-cols-[repeat(3,100px)] grid-rows-[repeat(10,100px)]"
    : "grid-cols-[repeat(9,100px)] grid-rows-[repeat(4,100px)]";

  let themeIndex = [
    "one",
    "one",
    "empty",
    "empty",
    "empty",
    "empty",
    "two",
    "three",
    "three",
    "four",
    "four",
    "one",
    "one",
    "three",
    "three",
    "two",
    "two",
    "two",
    "four",
    "four",
    "four",
    "two",
    "two",
    "three",
    "three",
    "two",
    "two",
    "empty",
    "one",
    "four",
    "four",
    "three",
    "one",
    "three",
    "three",
    "empty",
  ];

  if (isMobile) {
    themeIndex = themeIndex.filter((theme) => theme !== "empty");
  }

  // Randomize content
  shuffle(tech);

  // Keep blank spaces in their proper positions
  // Get all indices that are "empty"
  const fixedIndices = themeIndex
    .map(function (theme, index) {
      if (theme === "empty") {
        return index;
      }
    })
    .filter((theme) => theme !== undefined);

  let fixedPositionIndex = 0;
  let tmp = null;

  for (let i = 0; i < tech.length; i++) {
    // If is a blank entry and is not in a fixed position, put the blank entry in a fixed position
    if (!tech[i].name && !fixedIndices.includes(i)) {
      // If the current position is blank and the swapped position is also blank, increment the blank counter
      if (!tech[fixedIndices[fixedPositionIndex]].name) {
        fixedPositionIndex++;
        if (!tech[fixedIndices[fixedPositionIndex]].name) fixedPositionIndex++;
      }

      // Swap
      tmp = tech[i];
      tech[i] = tech[fixedIndices[fixedPositionIndex]];
      tech[fixedIndices[fixedPositionIndex]] = tmp;

      fixedPositionIndex++;
    }
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
          {isForeign ? "Bảng Ngăn Xếp Công Nghệ" : "Tech Stack Table"}
        </h2>
      </motion.div>

      <div
        className={`grid ${gridLayout} gap-2.5 justify-center m-auto overflow-x-auto overflow-y-hidden`}
      >
        {tech.map((technology, index) =>
          themeIndex[index] === "empty" ? (
            <div key={`empty-${index}`}></div>
          ) : (
            <PeriodicTech
              key={`tech-${index}`}
              theme={themeIndex[index]}
              index={index}
              {...technology}
            />
          )
        )}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "");
