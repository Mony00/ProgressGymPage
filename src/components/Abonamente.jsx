import { useZoom } from "../context/Context";
import Abonament from "./Abonament";
import styles from "./Abonamente.module.css";

function Abonamente() {
  const { abonamente, translate } = useZoom();

  // console.log(abonamente);

  return (
    <div className={styles["abonamente-wrapper"]}>
      <div className={styles.title}>
        <h2>
          {translate
            ? `Va punem la dispozitie urmatoarele abonamente`
            : `Memberships`}
        </h2>
      </div>

      <div className={styles.abonamente}>
        {abonamente.map((abonament) => (
          <Abonament key={abonament.abonament} abonament={abonament} />
        ))}
      </div>
    </div>
  );
}

export default Abonamente;
