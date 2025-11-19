import { useState, useEffect } from 'react';


function About() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("/api/llm")
      .then(response => response.json())
      .then(json => setSongs(json))
  }, []);

  return (
    <div>
      <h1>About</h1>
      <ol>
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ol>
    </div>
  );
}

export default About;