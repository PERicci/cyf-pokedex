import PropTypes from "prop-types";
import { useState, useEffect } from "react";

CaughtPokemon.propTypes = {
  date: PropTypes.string.isRequired,
};

export function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  useEffect(() => {}, [caught]);

  function catchPokemon() {
    setCaught((prev) => [...prev, pokemonNameInput]);
    setPokemonNameInput("");
  }

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  const { date } = props;
  return (
    <>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch more one!</button>
      <ul id="pokemon-list">
        {caught.map((pokemon, index) => (
          <li key={pokemon + index}>{pokemon}</li>
        ))}
      </ul>
    </>
  );
}
