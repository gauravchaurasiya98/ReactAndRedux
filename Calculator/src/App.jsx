import Display from "./components/Display";
import Buttons from "./components/Buttons";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("");

  const evaluateDisplayValue = (value) => {
    if (value === "C") {
      setDisplayValue("");
    } else if (value === "=") {
      setDisplayValue(eval(displayValue));
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <div className={`container ${styles["cal-container"]}`}>
      <Display displayValue={displayValue} />
      <Buttons onButtonClick={evaluateDisplayValue} />
    </div>
  );
}

export default App;
