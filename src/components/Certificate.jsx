import { useLanguage } from "../contexts/LanguageContext";
import certificateStyles from "./Certificates.module.css";

/* eslint react/prop-types: 0 */
const Certificate = ({ img, credential, issued, summary, summaryvn, link }) => {
  const { isForeign } = useLanguage();

  return (
    <div className={certificateStyles.card}>
      <div className={`${certificateStyles.face} ${certificateStyles.face1}`}>
        <div className={certificateStyles.content}>
          <img src={`certificates/${img}`} alt="img" />
        </div>
      </div>
      <div className={`${certificateStyles.face} ${certificateStyles.face2}`}>
        <div className={certificateStyles.content}>
          <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
            {credential}
          </p>
          <p style={{ marginBottom: "10px" }}>
            <span>{isForeign ? "Cấp" : "Issued:"}&nbsp;</span>
            {issued.toDateString().split(" ").slice(1).join(" ")}
          </p>
          <p>{isForeign ? summaryvn : summary}</p>
          <a href={link} rel="noopener noreferrer" target="_blank">
            {isForeign ? "Đọc thêm" : "Read More"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
