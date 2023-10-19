import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { shuffle } from "../utils/shuffle";
import toast from "react-hot-toast";

const Tech = () => {
  shuffle(technologies);
  if (technologies.length > 13) {
    toast.error("Too many WebGL images. Remove some WebGL images.");
    return;
  }

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
