import { useZoom } from "../context/Context";
import styles from "./DescriptionPage.module.css";

function DescriptionPage() {
  const { translate, setTranslate } = useZoom();
  const link = (
    <a
      className={styles.link_style}
      href="https://www.google.com/maps/place/Progress+Gym/@46.4675541,24.0845316,17z/data=!3m1!4b1!4m6!3m5!1s0x474bdd9164e5f88f:0x2508150bedba35b9!8m2!3d46.4675541!4d24.0871065!16s%2Fg%2F11n5zmszlh?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D"
    >
      {translate ? "aici" : "here"}
    </a>
  );

  return (
    <section>
      <div className={styles.description}>
        <div>
          {translate ? (
            <p className={styles.pharagraphs}>
              <strong>text in Romana </strong> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Obcaecati unde similique
              reprehenderit voluptates nostrum excepturi molestias illo
              architecto amet hic? Optio ab assumenda nihil sunt voluptas
              aspernatur consequuntur atque illo. {link}
            </p>
          ) : (
            <p className={styles.pharagraphs}>
              <strong>Text in Engleza</strong> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Neque dolorum quas officiis minus,
              cumque dicta dignissimos fugiat sit omnis cum molestiae eaque
              minima mollitia? Dolor suscipit in molestias libero nemo.{link}
            </p>
          )}

          <button
            className={styles.btn_translate}
            onClick={() => setTranslate(!translate)}
          >
            {translate ? "Translate to English" : "Back to Romanian"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default DescriptionPage;
