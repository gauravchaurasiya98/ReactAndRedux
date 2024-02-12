import Heading from "./components/Heading";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import WishMessage from "./components/WishMessage";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  // { target: "Get React Certification", dueDate: "10-02-2024" },
  // { target: "Get Node Certification", dueDate: "28-02-2024" },

  const [todos, setTodos] = useState([]);

  const addTodo = (target, dueDate) => {
    const newTodos = [...todos, { target: target, dueDate: dueDate }];
    setTodos(newTodos);
  };

  const deleteTodo = (target) => {
    const newTodos = todos.filter((todo) => todo.target !== target);
    setTodos(newTodos);
  };

  return (
    <div className={`container ${styles.todoContainer}`}>
      <Heading></Heading>
      <AddTodo onAddButtonClick={addTodo} />
      {todos.length === 0 && <WishMessage />}
      <Todos todos={todos} onDeleteButtonClick={deleteTodo} />
    </div>
  );
}

export default App;
