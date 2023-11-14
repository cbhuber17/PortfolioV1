import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { shuffle } from "../utils/shuffle";
import PeriodicTech from "./PeriodicTech";

const Tech = () => {
  if (technologies.length != 30) {
    console.log(
      `30 Techs required to fill periodic table: ${technologies.length}`
    );
    return;
  }

  shuffle(technologies);
  // Holes in periodic table
  // const skipIndex = [2, 3, 4, 5, 27, 35];

  return (
    <div className="grid grid-cols-[repeat(9,100px)] grid-rows-[repeat(4,100px)] gap-2.5 max-w-[1200px] justify-center m-auto">
      {technologies.map((technology, index) => (
        <PeriodicTech key={`tech-${index}`} {...technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
