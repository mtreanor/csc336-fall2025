import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from './Home.jsx';
import Songs from './Songs.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/songs">Songs</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
