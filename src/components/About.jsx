import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ParagraphHeader from "./ParagraphHeader";
import ServiceCard from "./ServiceCard";
import SectionWrapper from "../hoc/SectionWrapper";
import { shuffle } from "../utils/shuffle";
import { useLanguage } from "../contexts/LanguageContext";
import useWindowDimensions from "../hooks/useWindowDimensions";

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  const { isForeign } = useLanguage();
  const { width } = useWindowDimensions();
  let isMobile = false;
  shuffle(services);

  if (width < 500) isMobile = true;

  return (
    <>
      {isMobile ? (
        <div variants={textVariant()}>
          {isForeign ? (
            <ParagraphHeader pText="Giới Thiệu" hText="Tổng Quan." style="" />
          ) : (
            <ParagraphHeader pText="Introduction" hText="Overview." style="" />
          )}
        </div>
      ) : (
        <motion.div variants={textVariant()}>
          {isForeign ? (
            <ParagraphHeader pText="Giới Thiệu" hText="Tổng Quan." style="" />
          ) : (
            <ParagraphHeader pText="Introduction" hText="Overview." style="" />
          )}
        </motion.div>
      )}

      {/* Direction, type, delay(s), duration(s) */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        viewport={{ once: true, margin: "200px" }}
      >
        {isForeign
          ? "Chào mừng bạn đến với danh mục đầu tư của tôi, nơi sự đổi mới đáp ứng được độ chính xác trong lĩnh vực kỹ thuật số. Tôi là một Nhà phát triển web Full Stack có kinh nghiệm với niềm đam mê tạo ra các giải pháp liền mạch và có thể mở rộng để kết nối khoảng cách giữa trải nghiệm người dùng và chức năng mạnh mẽ."
          : "Welcome to my portfolio, where innovation meets precision in the digital realm. I am an experienced Full Stack Web Developer with a passion for crafting seamless and scalable solutions that bridge the gap between user experience and robust functionality."}
        <br />
        <br />
        {isForeign
          ? "Tôi cũng tự tin trong lĩnh vực công nghệ GNSS, điều mà tôi cảm thấy quan trọng nhất trong lĩnh vực này đó là độ chính xác tuyệt đối. Tôi có con mắt tinh tường về chi tiết, đảm bảo rằng hệ thống định vị đáp ứng các tiêu chuẩn chất lượng nghiêm ngặt cho các ứng dụng quan trọng về an toàn. Cách tiếp cận tỉ mỉ này áp dụng cho công việc của tôi trong Giải pháp đám mây, đặc biệt là với AWS."
          : "I also excel in GNSS technologies where precision and accuracy are paramount. I have a keen eye for detail, ensuring that navigation systems meet stringent quality standards for safety-critical applications. This meticulous approach extends to my work in Cloud Solutions, particularly with AWS."}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center lg:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
