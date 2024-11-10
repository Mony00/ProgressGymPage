import { useZoom } from "../context/Context";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

function Footer() {
  const { translate } = useZoom();
  return (
    <footer className={styles.footercontainer}>
      <p className={styles.item1}>don&apos;t stress, just progress!</p>

      <div className={styles.item2}>
        <div className={styles.program}>
          <h4>program</h4>
          <p>Non-Stop</p>
        </div>
        <div className={styles.contact}>
          <h4> contact </h4>
          <p>Tel: +40744129868</p>
        </div>
      </div>

      <div className={styles.item3}>
        <h4>{translate ? `Urmareste-ne pe ` : `Follow us on `} </h4>
        <div className={styles.icons}>
          <a
            href="https://www.facebook.com/profile.php?id=100064090087846"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/progresgymm/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/+40744129868?text=Salut%2C%20Cu%20ce%20te%20pot%20ajuta%3F"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div className={styles.item5}>
        <div className={styles.icons}>
          <a
            href="https://github.com/Mony00"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/+40729866846"
            aria-label="Whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p>
          {translate
            ? `Pagina realizata de Kristof Monika`
            : `Webpage made by Krisof Monika`}
        </p>
      </div>

      <div className={styles.item4}>COPYRIGHT © Progress GYM</div>
    </footer>
  );
}

export default Footer;
