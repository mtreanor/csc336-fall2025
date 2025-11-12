import { useState, useEffect } from 'react';

function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      // First, get the list of 10 Pokémon
      let num = 200;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${num}`);
      const data = await response.json();

      const detailed = [];

      // Loop through each one and fetch its details one by one
      for (const p of data.results) {
        const res = await fetch(p.url);
        const details = await res.json();

        detailed.push({
          name: details.name,
          image: details.sprites.front_default,
          types: details.types.map(t => t.type.name),
        });

        // Optional: update state gradually (as each Pokémon loads)
        setPokemonList([...detailed]);
      }

      // Or if you want to update only once at the end:
      // setPokemonList(detailed);
    }

    loadPokemon();
  }, []);

  if (!pokemonList.length) return <p>Loading...</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {pokemonList.map(p => (
        <div key={p.name} style={{ textAlign: 'center' }}>
          <img src={p.image} alt={p.name} />
          <p>{p.name}</p>
          <p>{p.types.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default Pokemon;




/*
import { useState, useEffect } from 'react';

function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(res => res.json())
      .then(async data => {
        // Fetch details for each Pokémon
        const detailed = await Promise.all(
          data.results.map(async (p) => {
            const res = await fetch(p.url);
            const details = await res.json();
            return {
              name: details.name,
              image: details.sprites.front_default,
              types: details.types.map(t => t.type.name),
            };
          })
        );
        setPokemonList(detailed);
      });
  }, []);

  if (!pokemonList.length) return <p>Loading...</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {pokemonList.map(p => (
        <div key={p.name} style={{ textAlign: 'center' }}>
          <img src={p.image} alt={p.name} />
          <p>{p.name}</p>
          <p>{p.types.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default Pokemon;
*/