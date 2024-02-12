import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <div className={styles.display}>
      <input type="text" value={displayValue} readOnly />
    </div>
  );
};

export default Display;
