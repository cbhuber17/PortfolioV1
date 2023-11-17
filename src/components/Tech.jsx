import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import PeriodicTech from "./PeriodicTech";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useLanguage } from "../contexts/LanguageContext";
// import { shuffle } from "../utils/shuffle";

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  const { isForeign } = useLanguage();

  if (technologies.length != 36) {
    console.log(
      `36 Techs (6 blank) required to fill periodic table: ${technologies.length}`
    );
    return;
  }

  const themeIndex = [
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

  // Randomize content
  // shuffle(technologies);

  // Keep blank spaces in their proper positions
  // Get all indices that are "empty"
  // const fixedIndices = themeIndex
  //   .map(function (theme, index) {
  //     if (theme === "empty") {
  //       return index;
  //     }
  //   })
  //   .filter((theme) => theme !== undefined);

  // let fixedPositionIndex = 0;
  // let tmp = null;

  // for (let i = 0; i < technologies.length; i++) {
  //   // If is a blank entry and is not in a fixed position, put the blank entry in a fixed position
  //   if (!technologies[i].name && !fixedIndices.includes(i)) {
  //     // Swap
  //     tmp = technologies[i];
  //     technologies[i] = technologies[fixedIndices[fixedPositionIndex]];
  //     technologies[fixedIndices[fixedPositionIndex]] = tmp;

  //     fixedPositionIndex++;
  //   }
  // }

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
          {isForeign ? "Bảng Ngăn Xếp Công Nghệ" : "Tech Stack Table"}
        </h2>
      </motion.div>

      <div className="grid grid-cols-[repeat(9,100px)] grid-rows-[repeat(4,100px)] gap-2.5 justify-center m-auto overflow-x-auto">
        {technologies.map((technology, index) =>
          themeIndex[index] === "empty" ? (
            <div key={`empty-${index}`}></div>
          ) : (
            <PeriodicTech
              key={`tech-${index}`}
              theme={themeIndex[index]}
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
