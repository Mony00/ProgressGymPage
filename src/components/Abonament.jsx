import PropTypes from "prop-types";

function Abonament({ abonament }) {
  return (
    <div>
      <p>{abonament.abonament}</p>
      <p>{abonament.descriere}</p>
      <p>{abonament.pret}</p>
    </div>
  );
}
Abonament.propTypes = {
  abonament: PropTypes.object.isRequired,
};

export default Abonament;
