import { useState } from 'react'
import TodoItem from "./TodoItem"

function App() {
  // const [x, setX] = useState(10);

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([
    {
      task: "Eat dinner",
      complete: false,
      id: 1
    },
    {
      task: "Pet cat",
      complete: true,
      id: 2
    },
    {
      task: "Beat Mario Sunshine",
      complete: true,
      id: 3
    }
  ]);


  function addTodo() {
    let newTodo = {
      task: task,
      completed: false,
      id: Date.now()
    }
    setTodos([...todos, newTodo]);
    setTask("");
  }

  return (
    <div>
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} 
      />
      <button onClick={addTodo}>Add Todo</button>
      

      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id}/>
        ))}
      </ul>

    </div>
  )
}

export default App
