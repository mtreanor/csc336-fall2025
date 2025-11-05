// Import CSS file for styling this component
import "./TodoItem.css"

// OBJECT DESTRUCTURING in function parameters:
// Instead of: function TodoItem(props) { const todo = props.todo; ... }
// We use destructuring to extract 'todo' directly from the props object: {todo}
// This is similar to array destructuring, but uses curly braces {} for objects
// This means the component expects to receive a prop called "todo"
// Props are data passed from parent component (App) to child component (TodoItem)
function TodoItem({todo}) {
 
  // JSX return - renders a single list item
  return (
    <li 
        // Inline styles use double curly braces {{ }}:
        // Outer {} = "this is JavaScript in JSX"
        // Inner {} = "this is a JavaScript object"
        style={
            {
                // Ternary operator: condition ? valueIfTrue : valueIfFalse
                // If todo.complete is true, show line-through, otherwise show none
                textDecoration: todo.complete ? "line-through" : "none"
            }
        }>
        {/* {todo.task} means "display the value of todo.task here" */}
        {todo.task}
    </li>
  )
}

// Export makes this component available for other files to import
export default TodoItem
