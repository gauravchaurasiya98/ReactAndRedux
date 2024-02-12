import Todo from "./Todo";

const Todos = ({ todos, onDeleteButtonClick }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <Todo
          key={index + 1}
          todo={todo}
          onDeleteButtonClick={onDeleteButtonClick}
        ></Todo>
      ))}
    </>
  );
};

export default Todos;
