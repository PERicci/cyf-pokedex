import PropTypes from "prop-types";

Logo.propTypes = {
  appName: PropTypes.string.isRequired,
  pokemonImageUrl: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};



export function Logo(props) {
  const { appName, pokemonImageUrl, handleClick } = props;
  return (
    <header>
      <h1>{appName}</h1>
      <img src={pokemonImageUrl} alt="Mewtwo" onClick={handleClick}/>
    </header>
  );
}
