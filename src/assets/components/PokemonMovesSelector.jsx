import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonMoves } from "./PokemonMoves";

export function PokemonMovesSelector() {
  const navigateTo = useNavigate();
  const [id, setId] = useState(null);

  function handleBulbasaurClick() {
    setId(1);
    navigateTo(`/pokemon/1`);
  }

  function handleCharmanderClick() {
    setId(4);
    navigateTo(`/pokemon/4`);
  }

  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {id ? <PokemonMoves pokemonId={id} /> : null}
    </div>
  );
}
