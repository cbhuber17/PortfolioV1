import { SectionWrapper } from "../hoc";
import Certificate from "./Certificate";
import ParagraphHeader from "./ParagraphHeader";
import IconFacebook from "./icons/IconFacebook";
import certificateStyles from "./Certificates.module.css";

const Certificates = () => {
  return (
    <>
      <ParagraphHeader pText="Education" hText="Certificates" style="" />

      <div className={certificateStyles.container}>
        <Certificate
          icon={<IconFacebook />}
          iconText="Facebook"
          summary="Lorem ipsum dola init."
        />
      </div>
    </>
  );
};

export default SectionWrapper(Certificates);
