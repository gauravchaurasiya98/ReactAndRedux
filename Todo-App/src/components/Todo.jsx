import styles from "./Todo.module.css";

const Todo = ({ todo, onDeleteButtonClick }) => {
  return (
    <div className={`row ${styles.todoRow}`}>
      <div className={`col-sm-6 ${styles.todoCol}`}>
        <span>{todo.target}</span>
      </div>
      <div className={`col-sm-4 ${styles.todoCol}`}>
        <span>{todo.dueDate}</span>
      </div>
      <div className={`col-sm-2 ${styles.todoCol}`}>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDeleteButtonClick(todo.target)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
