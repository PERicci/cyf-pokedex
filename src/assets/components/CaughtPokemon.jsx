import PropTypes from "prop-types";

CaughtPokemon.propTypes = {
  date: PropTypes.string.isRequired,
};

export function CaughtPokemon(props) {
  const { date } = props;
  return <p>Caught 0 Pokemon on {date}</p>;
}
