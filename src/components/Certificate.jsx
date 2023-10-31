import certificateStyles from "./Certificates.module.css";

/* eslint react/prop-types: 0 */
const Certificate = ({ icon, iconText, summary }) => {
  return (
    <div className={certificateStyles.card}>
      <div className={`${certificateStyles.face} ${certificateStyles.face1}`}>
        <div className={certificateStyles.content}>
          {icon}
          <h3>{iconText}</h3>
        </div>
      </div>
      <div className={`${certificateStyles.face} ${certificateStyles.face2}`}>
        <div className={certificateStyles.content}>
          <p>{summary}</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
