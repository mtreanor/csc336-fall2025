function TodoItem({todo, toggleTodo}) {
  return (
    <li
      key={todo.id}
      onClick={toggleTodo}
      style={{
        cursor: "pointer",
        textDecoration: todo.done ? "line-through" : "none"
      }}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;
