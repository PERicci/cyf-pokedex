import PropTypes from "prop-types";

BestPokemon.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export function BestPokemon(props) {
  const { abilities } = props;
  console.log(abilities);
  return (
    <>
      <p className="title-quote">Mewtwo is the best!</p>
      <ul>
        {abilities.map((ability) => (
          <li key={ability.slice(0, 2) + ability.slice(-1)}>{ability}</li>
        ))}
      </ul>
    </>
  );
}
