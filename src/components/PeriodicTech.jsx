import styles from "./PeriodicTech.module.css";

/* eslint react/prop-types: 0 */
// const PeriodicTech = ({ short, name, link, icon, theme }) => {
const PeriodicTech = ({ short, name, link }) => {
  return (
    <div className={styles.periodicelement}>
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
