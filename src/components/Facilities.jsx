import styles from "./Facilities.module.css";

import { FaHeart } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoNutrition } from "react-icons/io5";
import { GiBiceps } from "react-icons/gi";
import { GiBoxingGlove } from "react-icons/gi";
import { FaShower } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";

function Facilities() {
  return (
    <div className={styles.offering}>
      <h1>
        Beneficiile membrilor <strong>ProgressGym</strong>
      </h1>
      <div className={styles.elements}>
        <p className={styles["responsive_pharagraph"]}>
          <span>
            <FaHeart />
          </span>{" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          illum.
        </p>
        <p className={styles["responsive_pharagraph"]}>
          <span>
            <GiProgression />
          </span>{" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          illum.
        </p>
        <p className={styles["responsive_pharagraph"]}>
          <span>
            <IoNutrition />
          </span>{" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          illum.
        </p>
        <p className={styles["responsive_pharagraph"]}>
          <span>
            <GiBiceps />
          </span>{" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          illum.
        </p>
        <p className={styles["responsive_pharagraph"]}>
          <span>
            <GiBoxingGlove />
          </span>{" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          illum.
        </p>
        <p className={styles["responsive_pharagraph"]}>
          <span>
            <FaShower />
          </span>{" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          illum.
        </p>
        <p className={styles["responsive_pharagraph"]}>
          <span>
            <FaInfinity />
          </span>{" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          illum. <strong className={styles["pop-out-text"]}>Non-Stop</strong>
        </p>
      </div>
    </div>
  );
}

export default Facilities;
