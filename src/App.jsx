import "./App.css";
import { Logo } from "./assets/components/Logo";
import { BestPokemon } from "./assets/components/BestPokemon";
import { CaughtPokemon } from "./assets/components/CaughtPokemon";

function App() {
  const appName = "Pedro's Pokedex";
  const pokemonImageUrl = "https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png"
  const abilities = ["Pressure", "Mega Evolution", "Mind Control"];
  const date = new Date().toLocaleDateString("en-GB");
  return (
    <>
      <Logo appName={appName} pokemonImageUrl={pokemonImageUrl} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </>
  );
}

export default App;
