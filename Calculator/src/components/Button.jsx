import styles from "./Button.module.css";

const Button = ({ className, buttonValue, onButtonClick }) => {
  const handleOnButtonClick = (value) => {
    if (value === "x") {
      onButtonClick("*");
      return;
    }
    onButtonClick(value);
  };

  return (
    <button
      type="button"
      className={`${styles["cal-btn"]} ${styles[className]}`}
      onClick={() => handleOnButtonClick(buttonValue)}
    >
      {buttonValue}
    </button>
  );
};

export default Button;
