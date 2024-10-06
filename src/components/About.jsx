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
          ? "Xin chào! Tôi xuất sắc trong các công nghệ GNSS, trong đó tính chính xác, tính toàn vẹn và độ tin cậy là tối quan trọng. Với hơn 15 năm làm Chuyên gia kiểm thử phần mềm, tôi đã đảm bảo rằng hệ thống định vị đáp ứng các tiêu chuẩn DO-178B cho các ứng dụng quan trọng về an toàn. Là một chuyên gia được công nhận về mô phỏng GNSS, tôi chuyên thiết kế, hiệu chỉnh, tự động hóa và triển khai mô phỏng RF để xác minh và xác nhận (V&V). Chuyên môn của tôi mở rộng sang xử lý tín hiệu RF, động lực học hệ thống vệ tinh và lập mô hình lỗi, với thành công đã được chứng minh trong việc tối ưu hóa hệ thống GNSS qua nhiều dự án và cấp chứng chỉ khác nhau."
          : "Greetings! I excel in GNSS technologies, where accuracy, integrity, and reliability are paramount. With over 15 years as a Software Testing Professional, I have ensured that navigation systems meet DO-178B standards for safety-critical applications. As a recognized expert in GNSS simulations, I specialize in designing, calibrating, automating, and implementing RF simulations for verification and validation (V&V). My expertise extends to RF signal processing, satellite system dynamics, and error modeling, with proven success in optimizing GNSS systems across various projects and certification levels."}
        <br />
        <br />
        {isForeign
          ? "Ngoài công việc của tôi trong GNSS, tôi còn là Nhà phát triển web Full Stack đam mê tạo ra các giải pháp mang lại trải nghiệm liền mạch cho người dùng. Với tư cách là Kiến trúc sư giải pháp được chứng nhận AWS, tôi tận dụng các công nghệ đám mây để thiết kế và triển khai các ứng dụng hiện đại, có thể mở rộng, đáp ứng nhu cầu công nghệ ngày nay."
          : "In addition to my work in GNSS, I am a Full Stack Web Developer passionate about creating solutions that deliver a seamless user experience. As an AWS Certified Solutions Architect, I leverage cloud technologies to design and implement scalable, modern applications that meet today's technological demands."}
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
