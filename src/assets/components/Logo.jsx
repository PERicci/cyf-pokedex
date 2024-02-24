import React from "react";

export function Logo(props) {
  return (
    <header>
      <h1>{props.appName}</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png"
        alt="Mewtwo"
      />
    </header>
  );
}
