import PropTypes from "prop-types";
import styles from "./Abonament.module.css";

function Abonament({ abonament }) {
  return (
    <div className={styles.abonament}>
      <div className={`${styles["abonament-card"]} ${styles["border-color"]}`}>
        <p className={styles.title}>{abonament.abonament}</p>
        <p className={styles.description}>{abonament.descriere}</p>
      </div>
    </div>
  );
}
Abonament.propTypes = {
  abonament: PropTypes.object.isRequired,
};

export default Abonament;
