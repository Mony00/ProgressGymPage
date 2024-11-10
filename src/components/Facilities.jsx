import styles from "./Facilities.module.css";

import { FaHeart } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoNutrition } from "react-icons/io5";
import { GiBiceps } from "react-icons/gi";
import { GiBoxingGlove } from "react-icons/gi";
import { FaShower } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";
import { useZoom } from "../context/Context";

function Facilities() {
  const { translate } = useZoom();
  return (
    <div className={styles.offering}>
      <h1>
        {" "}
        {translate ? (
          <>
            Beneficiile membrilor <strong>ProgressGym</strong>
          </>
        ) : (
          <>English text</>
        )}
      </h1>
      <div className={styles.elements}>
        <p className={styles["responsive_pharagraph"]}>
          <span>
            <FaHeart />
          </span>{" "}
          {translate ? (
            <>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, illum.
            </>
          ) : (
            <>ENghlis1</>
          )}
        </p>
        <p className={styles["responsive_pharagraph"]}>
          <span>
            <GiProgression />
          </span>{" "}
          {translate ? (
            <>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, illum.
            </>
          ) : (
            <>ENghlis1</>
          )}
        </p>
        <p className={styles["responsive_pharagraph"]}>
          <span>
            <IoNutrition />
          </span>{" "}
          {translate ? (
            <>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, illum.
            </>
          ) : (
            <>ENghlis1</>
          )}
        </p>
        <p className={styles["responsive_pharagraph"]}>
          <span>
            <GiBiceps />
          </span>{" "}
          {translate ? (
            <>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, illum.
            </>
          ) : (
            <>ENghlis1</>
          )}
        </p>
        <p className={styles["responsive_pharagraph"]}>
          <span>
            <GiBoxingGlove />
          </span>{" "}
          {translate ? (
            <>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, illum.
            </>
          ) : (
            <>ENghlis1</>
          )}
        </p>
        <p className={styles["responsive_pharagraph"]}>
          <span>
            <FaShower />
          </span>{" "}
          {translate ? (
            <>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, illum.
            </>
          ) : (
            <>ENghlis1</>
          )}
        </p>
        <p className={styles["responsive_pharagraph"]}>
          <span>
            <FaInfinity />
          </span>{" "}
          {translate ? (
            <>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, illum.
            </>
          ) : (
            <>ENghlis1</>
          )}{" "}
          <strong className={styles["pop-out-text"]}>Non-Stop</strong>
        </p>
      </div>
    </div>
  );
}

export default Facilities;
