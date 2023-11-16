import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ParagraphHeader from "./ParagraphHeader";
import ServiceCard from "./ServiceCard";
import SectionWrapper from "../hoc/SectionWrapper";
import { shuffle } from "../utils/shuffle";
import { useLanguage } from "../contexts/LanguageContext";

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  const { isForeign } = useLanguage();
  shuffle(services);

  return (
    <>
      <motion.div variants={textVariant()}>
        {isForeign ? (
          <ParagraphHeader pText="Giới Thiệu" hText="Tổng Quan." style="" />
        ) : (
          <ParagraphHeader pText="Introduction" hText="Overview." style="" />
        )}
      </motion.div>

      {/* Direction, type, delay(s), duration(s) */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p>
          {isForeign
            ? "Chào mừng bạn đến với danh mục đầu tư của tôi, nơi sự đổi mới đáp ứng được độ chính xác trong lĩnh vực kỹ thuật số. Tôi là một Nhà phát triển web Full Stack có kinh nghiệm với niềm đam mê tạo ra các giải pháp liền mạch và có thể mở rộng để kết nối khoảng cách giữa trải nghiệm người dùng và chức năng mạnh mẽ. tôi đã sẵn sàng để cung cấp các giải pháp web chất lượng cao, toàn diện."
            : "Welcome to my portfolio, where innovation meets precision in the digital realm. I am an experienced Full Stack Web Developer with a passion for crafting seamless and scalable solutions that bridge the gap between user experience and robust functionality. I am dedicated to delivering high-quality, end-to-end web solutions."}
        </p>
        <br />
        <p>
          {isForeign
            ? "Tôi cũng xuất sắc trong các công nghệ GNSS trong đó độ chính xác và độ chính xác là điều tối quan trọng. Tôi có con mắt tinh tường về chi tiết, đảm bảo rằng hệ thống định vị đáp ứng các tiêu chuẩn chất lượng nghiêm ngặt cho các ứng dụng quan trọng về an toàn. Cách tiếp cận tỉ mỉ này áp dụng cho công việc của tôi trong Giải pháp đám mây, đặc biệt là với AWS. Tận dụng sức mạnh của đám mây, tôi thiết kế và triển khai các kiến ​​trúc an toàn và có thể mở rộng nhằm nâng cao hiệu suất và khả năng phục hồi của các ứng dụng nhằm đáp ứng nhu cầu của công nghệ hiện đại."
            : "I also excel in GNSS technologies where precision and accuracy are paramount. I have a keen eye for detail, ensuring that navigation systems meet stringent quality standards for safety-critical applications. This meticulous approach extends to my work in Cloud Solutions, particularly with AWS. Leveraging the power of the cloud, I design and implement scalable and secure architectures that enhance the performance and resilience of applications to meet the demands of modern technology."}
        </p>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
