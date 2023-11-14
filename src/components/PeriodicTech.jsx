import styles from "./PeriodicTech.module.css";

/* eslint react/prop-types: 0 */
// const PeriodicTech = ({ short, name, link, icon, theme }) => {
const PeriodicTech = ({ short, name, link, theme }) => {
  switch (theme) {
    case "one":
      theme = styles.one;
      break;
    case "two":
      theme = styles.two;
      break;
    case "three":
      theme = styles.three;
      break;
    case "four":
      theme = styles.four;
      break;
    case "emptyspace2":
      theme = styles.emptyspace2;
      break;

    default:
      theme = null;
      break;
  }

  return (
    <div className={`${styles.periodicelement} ${theme}`}>
      <a href={link} target="_blank" rel="noreferrer noopener">
        <div className={styles.periodicelementinner}>
          <div className={styles.title}>{short}</div>
          <div className={styles.name}>{name}</div>
        </div>
      </a>
    </div>
  );
};

export default PeriodicTech;
