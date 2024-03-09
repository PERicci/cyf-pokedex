import "./App.css";
import { Logo } from "./assets/components/Logo";
import { BestPokemon } from "./assets/components/BestPokemon";
import { CaughtPokemon } from "./assets/components/CaughtPokemon";
import { PokemonMovesSelector } from "./assets/components/PokemonMovesSelector";
import { PokemonCity } from "./assets/components/PokemonCity";

function logWhenClicked() {
  console.log("Logo clicked!");
}

function App() {
  const appName = "Pedro's Pokedex";
  const pokemonImageUrl =
    "https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png";
  const abilities = ["Pressure", "Mega Evolution", "Mind Control"];
  const date = new Date().toLocaleDateString("en-GB");
  return (
    <>
      <Logo
        appName={appName}
        pokemonImageUrl={pokemonImageUrl}
        handleClick={logWhenClicked}
      />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </>
  );
}

export default App;
