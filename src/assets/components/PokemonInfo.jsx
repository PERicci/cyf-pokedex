import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function PokemonInfo() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState({});
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
      });
  }, [id]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    pokemonData.name && (
      <>
        <h2>{capitalizeFirstLetter(pokemonData.name)}</h2>
        <p>Colour: {capitalizeFirstLetter(pokemonData.color.name)}</p>
        <p>Shape: {capitalizeFirstLetter(pokemonData.shape.name)}</p>
        <p>Base Happiness: {pokemonData.base_happiness}</p>
        <p>Capture Rate: {pokemonData.capture_rate}</p>
      </>
    )
  );
}
