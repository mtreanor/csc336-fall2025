import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

import RandomPokemon from './RandomPokemon.jsx';
import Home from './Home.jsx';
import About from './About.jsx';

// Main app component that sets up client-side routing using React Router.
// BrowserRouter enables routing functionality, allowing different components
// to be displayed based on the URL path without full page reloads.
function App() {

  return (
    <>
      <BrowserRouter>
        {/* Navigation bar with NavLink components.
            NavLink is like Link but automatically adds an 'active' class
            to the currently selected route, which we can style in CSS. */}
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/pokemon">Pokemon</NavLink>
        </nav>

        {/* Route definitions map URL paths to React components.
            When the URL matches a path, React Router renders the corresponding
            element. Only one route is rendered at a time. */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/pokemon" element={<RandomPokemon/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
