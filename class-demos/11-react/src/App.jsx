// Import useState from React - this is a "hook" that lets us manage state (data that can change)
// useState is a function that returns an array with two elements: [currentValue, setterFunction]
import { useState } from 'react'
import TodoItem from "./TodoItem"

// This is a React component - a function that returns JSX (JavaScript XML, looks like HTML)
// Components are reusable pieces of UI that can have their own state and logic
function App() {
  // const [x, setX] = useState(10);

  // ARRAY DESTRUCTURING with useState:
  // useState("") returns an array: ["", function]
  // The square brackets [task, setTask] use "array destructuring" to assign:
  //   - task = the first element (the current state value)
  //   - setTask = the second element (a function to update the state)
  // Instead of writing: const stateArray = useState(""); const task = stateArray[0]; const setTask = stateArray[1];
  // We use destructuring to get both values at once: const [task, setTask] = useState("");
  const [task, setTask] = useState("");
  
  // Another useState hook - this time for an array of todo objects
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


  // Function to add a new todo to the list
  function addTodo() {
    // Create a new todo object with the current task value
    let newTodo = {
      task: task,
      complete: false, 
      id: Date.now()    // Generate a unique ID using current timestamp
    }
    // SPREAD OPERATOR (...todos):
    // Creates a new array containing all existing todos, then adds newTodo
    // We must create a new array (not modify the old one) because React needs to detect changes
    // [1, 2, 3] becomes [1, 2, 3, newTodo] - keeps all old items, adds the new one
    setTodos([...todos, newTodo]);
    // Clear the input field by resetting task to empty string
    setTask("");
  }

  // JSX (JavaScript XML) - looks like HTML but it's actually JavaScript
  // The return statement returns JSX that React will render to the page
  return (
    <div>
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} 
      />
      <button onClick={addTodo}>Add Todo</button>
      

      <ul>
        {/* .map() loops through the todos array and creates a component for each one */}
        {/* { } curly braces mean "this is JavaScript code" inside JSX */}
        {/* todos.map((todo) => ...) means: for each todo in todos, do something */}
        {/* The arrow function receives each todo object and returns a TodoItem component */}
        {/* key={todo.id} is required by React - helps React track which items changed */}
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id}/>
        ))}
      </ul>

    </div>
  )
}

export default App
