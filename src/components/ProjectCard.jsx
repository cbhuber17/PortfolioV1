import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { github, external } from "../assets";
import { fadeIn } from "../utils/motion";
import { useLanguage } from "../contexts/LanguageContext";

/* eslint react/prop-types: 0 */
const ProjectCard = ({
  index,
  name,
  description,
  descriptionvn,
  tags,
  image,
  source_code_link,
  project_link,
  under_construction,
  show_motion = true,
}) => {
  const { isForeign } = useLanguage();

  return (
    <>
      {/* Motion lib limited to number of ProjectCard renders */}
      {/* MOTION CARD */}
      {show_motion ? (
        <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full card"
          >
            <div className="relative w-full h-[230px]">
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute inset-0 flex justify-end space-x-1 m-3 card-img_hover">
                {source_code_link && !under_construction && (
                  <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={github}
                      alt="Source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                )}
                {project_link && !under_construction && (
                  <div
                    onClick={() => window.open(project_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={external}
                      alt="Project link"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">
                {isForeign ? descriptionvn : description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </Tilt>
        </motion.div>
      ) : (
        // NO MOTION CARD
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full card [box-shadow:8px_14px_38px_rgba(39,44,49,.06),_1px_3px_8px_rgba(39,44,49,.03)] [transition:all_.5s_ease] hover:[box-shadow:8px_28px_50px_rgba(39,44,49,.07),_1px_6px_12px_rgba(39,44,49,.04)] hover:[transition:all_.4s_ease] hover:[transform:translate3D(0,-1px,0)_scale(1.1)]">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end space-x-1 m-3 card-img_hover">
              {source_code_link && !under_construction && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="Source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}

              {project_link && !under_construction && (
                <div
                  onClick={() => window.open(project_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={external}
                    alt="Project link"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">
              {isForeign ? descriptionvn : description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
