import { useRef } from "react";
import styles from "./AddTodo.module.css";

const AddTodo = ({ onAddButtonClick }) => {
  const targetValue = useRef();
  const dueDateValue = useRef();

  const handleAddButton = () => {
    onAddButtonClick(targetValue.current.value, dueDateValue.current.value);
    targetValue.current.value = "";
    dueDateValue.current.value = "";
  };

  return (
    <div className={`row ${styles.todoRow}`}>
      <div className={`col-sm-6 ${styles.todoCol}`}>
        <input type="text" placeholder="Enter Todo Here" ref={targetValue} />
      </div>
      <div className={`col-sm-4 ${styles.todoCol}`}>
        <input type="date" ref={dueDateValue} />
      </div>
      <div className={`col-sm-2 ${styles.todoCol}`}>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddButton}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
