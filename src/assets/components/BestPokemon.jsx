import React from "react";

export function BestPokemon(props) {
  
  return (
    <>
      <p className="title-quote">Mewtwo is the best!</p>
      <ul>
        {[props.abilities].map((ability) => (
          <li key={ability.slice(0, 2) + ability.slice(-1)}>{ability}</li>
        ))}
      </ul>
    </>
  );
}
