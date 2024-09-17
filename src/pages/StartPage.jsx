import { useState } from "react";
import styles from "./StartPage.module.css";
import { useEffect } from "react";

function StartPage() {
  const [animation, setAnimation] = useState("collapse");
  const [isScrolled, setIsScrolled] = useState(false);

  //animation at pagerender
  useEffect(function () {
    setAnimation("expand");

    // After 0.7 second (time of the expand animation), collapse the image back to original size
    const timeoutId = setTimeout(() => {
      setAnimation("collapse");
    }, 700); // Matches the CSS animation duration

    return () => clearTimeout(timeoutId);
  }, []);

  //animation when scrolled
  useEffect(
    function () {
      const handleScroll = () => {
        if (window.scrollY > 70) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    },
    [isScrolled]
  );

  return (
    <>
      <div className={styles["img-container"]}>
        <img
          className={`${styles["start-img"]} ${styles[animation]} ${
            isScrolled ? styles.shrink : ""
          }`}
          src="pictures\progress gym.png"
          alt="Logo"
        />
      </div>
      <div
        className={styles["img-container"]}
        style={{ height: "20000px", backgroundColor: "yellow" }}
      ></div>
    </>
  );
}

export default StartPage;
