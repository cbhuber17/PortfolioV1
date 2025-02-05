import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
// import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import Certificate from "./Certificate";
import ParagraphHeader from "./ParagraphHeader";
import certificateStyles from "./Certificates.module.css";
import { certificates } from "../constants";
import { useLanguage } from "../contexts/LanguageContext";
import useWindowDimensions from "../hooks/useWindowDimensions";

// eslint-disable-next-line react-refresh/only-export-components
const Certificates = () => {
  const { isForeign } = useLanguage();
  const { width } = useWindowDimensions();
  let isMobile = false;

  if (width < 1024) isMobile = true;

  return (
    <>
      {isMobile ? (
        <div variants={textVariant()}>
          {isForeign ? (
            <ParagraphHeader pText="Giáo dục" hText="Chứng chỉ" style="" />
          ) : (
            <ParagraphHeader pText="Education" hText="Certificates" style="" />
          )}
        </div>
      ) : (
        <motion.div variants={textVariant()}>
          {isForeign ? (
            <ParagraphHeader pText="Giáo dục" hText="Chứng chỉ" style="" />
          ) : (
            <ParagraphHeader pText="Education" hText="Certificates" style="" />
          )}
        </motion.div>
      )}

      <div className="w-full flex mb-10">
        {isMobile ? (
          <p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {isForeign
              ? "Dưới đây bạn sẽ tìm thấy thông tin xác thực và chứng chỉ của tôi trong những năm qua. Tất cả các chứng chỉ đều yêu cầu bài kiểm tra viết với kết quả đậu."
              : "Below you will find my credentials and certificates over the years. All certificates requires a written exam with passing results."}
          </p>
        ) : (
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {isForeign
              ? "Dưới đây bạn sẽ tìm thấy thông tin xác thực và chứng chỉ của tôi trong những năm qua. Tất cả các chứng chỉ đều yêu cầu bài kiểm tra viết với kết quả đậu."
              : "Below you will find my credentials and certificates over the years. All certificates requires a written exam with passing results."}
          </motion.p>
        )}
      </div>

      <div className={certificateStyles.container}>
        {certificates.map((certificate, index) => (
          <Certificate key={index} {...certificate} />
        ))}
      </div>
      {/* <p className="mt-10 pb-10">
        {isForeign
          ? "Xem danh sách đầy đủ trên trang 👉"
          : "See complete list on the addendum page 👉"}
        <Link to="/addendum#certificates" className="text-blue-300">
          {isForeign ? "phụ lục" : "addendum."}
        </Link>
      </p> */}
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Certificates);
