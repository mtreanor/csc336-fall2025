// src/App.jsx
import TodoItem from "./TodoItem.jsx"
import { useState, useEffect } from "react";
import worldJSON from "./data/world.json";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(()=>{
    async function getFromDatabase() {
      const response = await fetch("http://localhost:3000/todos");
      let todosFromServer = await response.json();
      
      todosFromServer.push({text: worldJSON.regions[0].name, id:101});
      setTodos(todosFromServer);
    }
    getFromDatabase();
  }, [])

  function addTodo() {
    if (!text.trim()) return;

    const newTodo = { id: Date.now(), text: text, done: false };
    setTodos([...todos, newTodo]); // 👈 Immutable update
    setText(""); // clear input
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }


  return (
    <div style={{ maxWidth: 400, margin: "auto", fontFamily: "sans-serif" }}>
      <h1>Todo List</h1>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={()=>toggleTodo(todo.id)} />
        ))}
      </ul>
    </div>
  );
}

export default App;
