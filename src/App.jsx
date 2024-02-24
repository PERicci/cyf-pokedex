import "./App.css";
import { Logo } from "./assets/components/Logo";
import { BestPokemon } from "./assets/components/BestPokemon";
import { CaughtPokemon } from "./assets/components/CaughtPokemon";

function App() {
  const abilities = ["Pressure", "Mega Evolution", "Mind Control"];
  const date = new Date().toLocaleDateString("en-GB");
  return (
    <>
      <Logo appName="Pedro's Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </>
  );
}

export default App;
