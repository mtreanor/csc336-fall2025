// App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoDetail from "./pages/TodoDetail";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
        <Link to="/mike">Mike</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
        <Route path="/mike" element={<div>
          <b>This is mike</b>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
