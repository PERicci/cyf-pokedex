import PropTypes from "prop-types";

Logo.propTypes = {
  appName: PropTypes.string.isRequired,
};

export function Logo(props) {
  const { appName } = props;
  return (
    <header>
      <h1>{appName}</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png"
        alt="Mewtwo"
      />
    </header>
  );
}
