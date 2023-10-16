import { styles } from "../styles";

/* eslint react/prop-types: 0 */
const ParagraphHeader = ({ pText, hText, style }) => {
  return (
    <>
      <p className={`${styles.sectionSubText} ${style}`}>{pText}</p>
      <h2 className={`${styles.sectionHeadText} ${style}`}>{hText}</h2>
    </>
  );
};

export default ParagraphHeader;
