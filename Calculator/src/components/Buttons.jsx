import Button from "./Button";
import styles from "./Buttons.module.css";

const Buttons = ({ onButtonClick }) => {
  const buttonValues = [
    "8",
    "9",
    "C",
    "6",
    "7",
    "/",
    "4",
    "5",
    "x",
    "2",
    "3",
    "-",
    "1",
    ".",
    "+",
    "0",
    "=",
  ];
  return (
    <div className={styles["btn-container"]}>
      {buttonValues.map((buttonValue, index) => (
        <Button
          key={buttonValue}
          className={`btn${index + 1}`}
          buttonValue={buttonValue}
          onButtonClick={onButtonClick}
        />
      ))}
    </div>
  );
};

export default Buttons;
