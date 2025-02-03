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
          ? "Xin chào! Tôi áp dụng kiến ​​thức và kỹ năng của mình vào công nghệ Định vị & Điều hướng, nơi đáp ứng và vượt quá các tiêu chí về độ chính xác, tính toàn vẹn và độ tin cậy. Với hơn 15 năm làm Chuyên gia kiểm thử phần mềm, tôi đã đảm bảo rằng hệ thống định vị đáp ứng các tiêu chuẩn DO-178B cho các ứng dụng quan trọng về an toàn."
          : "Greetings! I apply my knowledge and skills in Positioning & Navigation technologies, where accuracy, integrity, and reliability criterion are met and exceeded. With over 15 years as a Software Testing Professional, I have ensured that navigation systems meet DO-178B standards for safety-critical applications."}
        <br />
        <br />
        {isForeign
          ? "Tôi cũng áp dụng các kỹ năng của mình với tư cách là Nhà phát triển phần mềm nhân viên cấp cao, cung cấp các giải pháp hệ thống nhúng cho cả sản phẩm định vị trong nhà và ngoài trời. Với tư cách là Kiến trúc sư giải pháp và nhà thực hành AI được chứng nhận AWS, tôi tận dụng các công nghệ Đám mây & AI để thiết kế và triển khai các ứng dụng hiện đại, có thể mở rộng, đáp ứng nhu cầu công nghệ ngày nay. Tôi có thể tạo bất kỳ trang web hoặc ứng dụng web nào, hãy xem danh mục đầu tư của tôi bên dưới!"
          : "I also apply my skills as a Senior Staff Software Developer, providing embedded system solutions to both indoor & outdoor positioning products. As an AWS Certified Solutions Architect & AI Practitioner, I leverage Cloud & AI technologies to design and implement scalable, modern applications that meet today's technological demands. I can craft any website or web app, take a look at my portfolio below!"}
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
