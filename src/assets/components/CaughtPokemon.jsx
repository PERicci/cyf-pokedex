import PropTypes from "prop-types";
import { useState } from "react";

CaughtPokemon.propTypes = {
  date: PropTypes.string.isRequired,
};

export function CaughtPokemon(props) {
  let [caught, setCaught] = useState(0);

  function catchPokemon() {
    setCaught((prev) => prev + 1);
  }

  const { date } = props;
  return (
    <>
      <p>
        Caught {caught} Pokemon on {date}
      </p>
      <button onClick={catchPokemon}>Catch more one!</button>
    </>
  );
}
