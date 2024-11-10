import PropTypes from "prop-types";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import QA from "../data/QA.json";
import styles from "./QASEction.module.css";
import { useZoom } from "../context/Context";

function QASEction() {
  const { translate } = useZoom();
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className={styles["qa-container"]}>
      <h1>{translate ? `Intrebari Frecvnte` : `FAQ`}</h1>
      <section className={styles.accordeon}>
        {QA.map((qa) => (
          <Intrebare
            key={qa.id}
            qa={qa}
            curOpen={curOpen}
            onOpen={setCurOpen}
            translate={translate}
          />
        ))}
      </section>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Intrebare({ qa, curOpen, onOpen, translate }) {
  const isOpen = curOpen === qa.id;
  return (
    <div
      className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}
      onClick={() => onOpen(isOpen ? null : qa.id)}
    >
      <div className={styles.item}>
        <p className={styles.title}>
          {translate ? qa.intrebare : qa.eng_intrebare}
        </p>
        <IoIosArrowDown
          className={`${styles.icon} ${isOpen ? styles.openicon : ""}`}
        />
      </div>
      {isOpen && (
        <div className={styles.item}>
          <p className={styles.raspuns}>
            {translate ? qa.raspuns : qa.eng_raspuns}
          </p>
          <IoIosArrowUp
            className={`${styles.icon} ${isOpen ? styles.open : ""}`}
          />
        </div>
      )}
    </div>
  );
}

Intrebare.propTypes = {
  qa: PropTypes.shape({
    id: PropTypes.number.isRequired,
    intrebare: PropTypes.string.isRequired,
    eng_intrebare: PropTypes.string.isRequired,
    raspuns: PropTypes.string.isRequired,
    eng_raspuns: PropTypes.string.isRequired,
  }).isRequired,
};

export default QASEction;
