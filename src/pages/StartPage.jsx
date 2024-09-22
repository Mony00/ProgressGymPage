import { useState } from "react";
import styles from "./StartPage.module.css";
import { useEffect } from "react";

function StartPage() {
  const [animation, setAnimation] = useState("collapse");
  const [showLogo, setShowLogo] = useState(false);

  //animation at pagerender
  useEffect(function () {
    setAnimation("expand");

    // After 0.7 second (time of the expand animation), collapse the image back to original size
    const timeoutId = setTimeout(() => {
      setAnimation("collapse");
    }, 700); // Matches the CSS animation duration

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(
    function () {
      const handleScroll = () => {
        if (window.scrollY > 600) {
          setShowLogo(true);
        } else {
          setShowLogo(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [showLogo]
  );

  return (
    <>
      <div className={styles["img-container"]}>
        <img
          className={`${styles["start-img"]} ${styles[animation]}`}
          src="pictures\progress gym.png"
          alt="Logo"
        />
      </div>
      {showLogo && (
        <img
          className={styles["shrinked-img"]}
          src="pictures\progress gym.png"
          alt="mini-Logo"
        />
      )}
    </>
  );
}

export default StartPage;
