import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import PeriodicTech from "./PeriodicTech";
import { styles } from "../styles";

const Tech = () => {
  if (technologies.length != 36) {
    console.log(
      `36 Techs (6 blank) required to fill periodic table: ${technologies.length}`
    );
    return;
  }

  const themeIndex = {
    0: "one",
    1: "one",
    2: "empty",
    3: "empty",
    4: "empty",
    5: "empty",
    6: "two",
    7: "three",
    8: "three",
    9: "four",
    10: "four",
    11: "one",
    12: "one",
    13: "three",
    14: "three",
    15: "two",
    16: "two",
    17: "two",
    18: "four",
    19: "four",
    20: "four",
    21: "two",
    22: "two",
    23: "three",
    24: "three",
    25: "two",
    26: "two",
    27: "empty",
    28: "one",
    29: "four",
    30: "four",
    31: "three",
    32: "one",
    33: "three",
    34: "three",
    35: "empty",
  };

  return (
    <>
      <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
        Tech Stack Table
      </h2>
      <div className="grid grid-cols-[repeat(9,100px)] grid-rows-[repeat(4,100px)] gap-2.5 max-w-[1200px] justify-center m-auto">
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

export default SectionWrapper(Tech, "");
