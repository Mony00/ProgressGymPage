import PropTypes from "prop-types";
import styles from "./Abonament.module.css";
import { useZoom } from "../context/Context";

function Abonament({ abonament }) {
  const { translate } = useZoom();
  return (
    <div className={styles.abonament}>
      {translate ? (
        <div
          className={`${styles["abonament-card"]} ${styles["border-color"]}`}
        >
          <p className={styles.title}>{abonament.abonament}</p>
          <p className={styles.description}>{abonament.descriere}</p>
        </div>
      ) : (
        <div
          className={`${styles["abonament-card"]} ${styles["border-color"]}`}
        >
          <p className={styles.title}>{abonament.eng_abonament}</p>
          <p className={styles.description}>{abonament.eng_descriere}</p>
        </div>
      )}
    </div>
  );
}
Abonament.propTypes = {
  abonament: PropTypes.object.isRequired,
};

export default Abonament;
