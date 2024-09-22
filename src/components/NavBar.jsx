//import { style } from "framer-motion/client";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.nav_container}>
          <div className={styles.nav_logo}></div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
