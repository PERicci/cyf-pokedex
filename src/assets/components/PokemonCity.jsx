import { useState } from "react";

export function PokemonCity() {
  const [city, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <p>Welcome to the city of {city}</p>
      <input type="text" value={city} onChange={updateCity} />
    </div>
  );
}
