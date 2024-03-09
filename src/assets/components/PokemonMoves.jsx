import { useState, useEffect } from "react";

export function PokemonMoves(props) {
  let [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
        console.log(data);
      });
  }, [props.pokemonId]);

  return pokemonData ? (
    <div>
      <p>{pokemonData.name}&apos;s moves:</p>
      <ul>
        {pokemonData.moves.map((move, index) => {
          return <li key={index}>{move.move.name}</li>;
        })}
      </ul>
    </div>
  ) : null;
}
