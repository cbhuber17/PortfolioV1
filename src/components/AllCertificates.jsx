import { useLanguage } from "../contexts/LanguageContext";
import { SectionWrapper } from "../hoc";
import ParagraphHeader from "./ParagraphHeader";

// eslint-disable-next-line react-refresh/only-export-components
const AllCertificates = () => {
  const { isForeign } = useLanguage();

  return (
    <>
      {isForeign ? (
        <ParagraphHeader pText="Tất Cả Các Chứng Chỉ" hText="Học Ngoại Khóa." />
      ) : (
        <ParagraphHeader
          pText="All Certificates"
          hText="Extracurricular Learning."
        />
      )}
      <p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        id="certificates"
      >
        {isForeign
          ? "Tất cả các chứng chỉ được hiển thị dưới đây."
          : "All certificates are shown below."}
      </p>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(AllCertificates);
