import React from "react";

import "./App.css";
import { Logo } from "./assets/components/Logo";
import { BestPokemon } from "./assets/components/BestPokemon";
import { CaughtPokemon } from "./assets/components/CaughtPokemon";

function App() {
  const abilities = ["Pressure", "Mega Evolution", "Mind Control"];
  return (
    <>
      <Logo appName="Pedro's Pokedex"/>
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon />
    </>
  );
}



export default App;
