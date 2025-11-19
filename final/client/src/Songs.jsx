import { useState, useEffect } from 'react';


function Songs() {

  const [songs, setSongs] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/llm?refresh=${refresh===0?"false":"true"}`)
      .then(response => response.json())
      .then(json => {
        setSongs(json);
      })
      .finally(e=>setLoading(false));
  }, [refresh]);

  return (
    <>
      <h1>10 Beatles Songs - 1 of them isn't real</h1>
      {!loading ? (
        <div>
          <ol>
            {songs.map((song, index) => (
              <li key={index}>{song}</li>
            ))}
          </ol>
          <button onClick={e=> {
            setRefresh(r => r+1);
          }}>Generate New Songs</button>
        </div>
      ) : (
        <b>LOADING</b>
      )}
    </>
  );
}

export default Songs;