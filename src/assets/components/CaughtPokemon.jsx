import PropTypes from "prop-types";
import { useState, useEffect } from "react";

CaughtPokemon.propTypes = {
  date: PropTypes.string.isRequired,
};

export function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);

  useEffect(() => {}, [caught]);

  function chooseRandomPokemon() {
    const pokemon = [
      `Mewtwo`,
      `Mew`,
      `Pikachu`,
      `Eevee`,
      `Charizard`,
      `Blastoise`,
      `Alakazam`,
      `Gengar`,
      `Dragonair`,
      `Dragonite`,
      `Venusaur`,
      `Squirtle`,
      `Charmander`,
      `Bulbasaur`,
      `Pidgeotto`,
      `Rattata`,
    ];
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    return pokemon[randomIndex];
  }

  function catchPokemon() {
    setCaught((prev) => [...prev, chooseRandomPokemon()]);
  }

  const { date } = props;
  return (
    <>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
      <button onClick={catchPokemon}>Catch more one!</button>
      <ul id="pokemon-list">
        {caught.map((pokemon, index) => (
          <li key={pokemon + index}>{pokemon}</li>
        ))}
      </ul>
    </>
  );
}
