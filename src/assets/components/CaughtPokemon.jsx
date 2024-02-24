import React from "react";

export function CaughtPokemon() {
  const date = new Date().toLocaleDateString("en-GB");
  return <p>Caught 0 Pokemon on {date}</p>;
}