import "./App.css";
import { Logo } from "./assets/components/Logo";
import { BestPokemon } from "./assets/components/BestPokemon";
import { CaughtPokemon } from "./assets/components/CaughtPokemon";

function App() {
  const appName = "Pedro's Pokedex";
  const abilities = ["Pressure", "Mega Evolution", "Mind Control"];
  const date = new Date().toLocaleDateString("en-GB");
  return (
    <>
      <Logo appName={appName} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </>
  );
}

export default App;
