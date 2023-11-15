import { SectionWrapper } from "../hoc";
import ParagraphHeader from "./ParagraphHeader";

// eslint-disable-next-line react-refresh/only-export-components
const AllCertificates = () => (
  <>
    <ParagraphHeader
      pText="All Certificates"
      hText="Extracurricular Learning."
    />

    <p
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      id="certificates"
    >
      All certificates are shown below.
    </p>
  </>
);

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(AllCertificates);
