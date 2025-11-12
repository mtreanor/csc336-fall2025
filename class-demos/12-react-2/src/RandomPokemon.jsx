import { useState, useEffect } from 'react';

// Component that displays a Pokemon based on ID entered by the user.
// Uses React hooks (useState and useEffect) to manage component state
// and fetch data from an external API when the ID changes.
function RandomPokemon() {
  // State to store the Pokemon data object (null initially)
  const [pokemon, setPokemon] = useState(null);
  // State to store the Pokemon ID that the user enters
  const [pokeID, setPokeID] = useState(1);

  // Function that makes an HTTP request to the PokeAPI to fetch Pokemon data.
  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
      .then(res => {
        // Check if the response is ok (status 200-299).
        // APIs typically use HTTP status codes to indicate if a request was successful or if there was an error.
        // Codes in the 200 range mean success, while codes like 404 mean not found, or 500 mean server error.
        // We only want to continue if the response was successful.
        if (!res.ok) {
          // If the response is not ok, throw an error.
          // This will trigger the .catch() block below.
          throw new Error('Pokemon not found');
        }
        return res.json();
      })
      .then(data => {
        // Extract only the name and image from the API response
        setPokemon({
          name: data.name,
          image: data.sprites.front_default,
        });
      })
      .catch(err => {
        // If the fetch fails, set the Pokemon state to null.
        setPokemon(null);
      });
  };

  // useEffect hook runs fetchPokemon whenever pokeID changes.
  // The dependency array [pokeID] tells React to re-run this effect
  // whenever pokeID updates, ensuring we fetch new data when user changes the ID.
  // Also, all useEffect functions run when the component is first mounted.
  useEffect(() => {
    fetchPokemon();
  }, [pokeID]);

  return (
    <div >
      <input type="text" value={pokeID} onChange={e=>setPokeID(e.target.value)}/>
      {/* This triform pattern is used to conditionally render different content based on the state of pokemon.
      If the pokemon state is null, show a message saying "No Pokemon Found".
      If the pokemon state is not null, show the pokemon's name and image.
      */}
      {!pokemon ? (
        <p>No Pokemon Found</p>
      ) : (
        <>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.image} alt={pokemon.name} />
        </>
      )}
    </div>
  );
}

export default RandomPokemon;