import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParagraphHeader from "./ParagraphHeader";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../contexts/LanguageContext";
import useWindowDimensions from "../hooks/useWindowDimensions";

// eslint-disable-next-line react-refresh/only-export-components
const Works = () => {
  const { isForeign } = useLanguage();
  const { width } = useWindowDimensions();
  let isMobile = false;

  if (width < 1024) isMobile = true;

  return (
    <>
      {isMobile ? (
        <div>
          {isForeign ? (
            <ParagraphHeader
              pText="Công Việc Của Tôi"
              hText="Dự án."
              style=""
            />
          ) : (
            <ParagraphHeader pText="My work" hText="Projects." style="" />
          )}
        </div>
      ) : (
        <motion.div variants={textVariant()}>
          {isForeign ? (
            <ParagraphHeader
              pText="Công Việc Của Tôi"
              hText="Dự án."
              style=""
            />
          ) : (
            <ParagraphHeader pText="My work" hText="Projects." style="" />
          )}
        </motion.div>
      )}

      <div className="w-full flex">
        {isMobile ? (
          <p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {isForeign
              ? "Các dự án sau đây thể hiện kỹ năng và kinh nghiệm của tôi thông qua các ví dụ thực tế về công việc của tôi. Mỗi dự án được mô tả ngắn gọn với các liên kết đến kho mã và các bản demo trực tiếp trong đó. Nó phản ánh khả năng của tôi trong việc giải quyết các vấn đề phức tạp, làm việc với các công nghệ khác nhau và quản lý dự án một cách hiệu quả."
              : "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."}
          </p>
        ) : (
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {isForeign
              ? "Các dự án sau đây thể hiện kỹ năng và kinh nghiệm của tôi thông qua các ví dụ thực tế về công việc của tôi. Mỗi dự án được mô tả ngắn gọn với các liên kết đến kho mã và các bản demo trực tiếp trong đó. Nó phản ánh khả năng của tôi trong việc giải quyết các vấn đề phức tạp, làm việc với các công nghệ khác nhau và quản lý dự án một cách hiệu quả."
              : "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."}
          </motion.p>
        )}
      </div>

      <div className="card-grid mt-20 flex flex-wrap gap-7 justify-center lg:justify-start">
        {/* Show top projects */}
        {projects.map((project, index) =>
          index < 6 ? (
            <ProjectCard
              key={`project-${index}`}
              show_motion={!isMobile}
              index={index}
              {...project}
            />
          ) : (
            ""
          )
        )}
      </div>
      <p className="text-white mt-10">
        {isForeign
          ? "Xem danh sách đầy đủ trên trang 👉"
          : "See complete list on the addendum page 👉"}
        <Link to="/addendum" className="text-blue-300">
          {isForeign ? "phụ lục" : "addendum"}.
        </Link>{" "}
      </p>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Works, "");
