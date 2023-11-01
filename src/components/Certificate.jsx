import certificateStyles from "./Certificates.module.css";

/* eslint react/prop-types: 0 */
const Certificate = ({ img, credential, issued, summary, link }) => {
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
            <span>Issued:</span>
            {issued.toDateString().split(" ").slice(1).join(" ")}
          </p>
          <p>{summary}</p>
          <a href={link} rel="noopener noreferrer" target="_blank">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
