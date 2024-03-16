import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Logo } from "./assets/components/Logo";
import { BestPokemon } from "./assets/components/BestPokemon";
import { CaughtPokemon } from "./assets/components/CaughtPokemon";
import { PokemonMovesSelector } from "./assets/components/PokemonMovesSelector";
import { PokemonCity } from "./assets/components/PokemonCity";
import { PokemonInfo } from "./assets/components/PokemonInfo";

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
    <BrowserRouter>
      <Logo
        appName={appName}
        pokemonImageUrl={pokemonImageUrl}
        handleClick={logWhenClicked}
      />
      <section className="router-links">
        <Link to="/best-pokemon">Best Pokemon</Link>
        <Link to="/caught-pokemon">Caught Pokemon</Link>
      </section>
      <Routes>
        <Route
          path="/best-pokemon"
          element={<BestPokemon abilities={abilities} />}
        />
        <Route path="/caught-pokemon" element={<CaughtPokemon date={date} />} />
        <Route path="/pokemon/:id" element={<PokemonInfo />} />
      </Routes>
      <PokemonMovesSelector />
      <PokemonCity />
    </BrowserRouter>
  );
}

export default App;
