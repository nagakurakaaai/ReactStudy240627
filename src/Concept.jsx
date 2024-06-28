import styles from '../css/style.module.css'
import concept from '../images/concept.jpg'

function Concept() {
  return (
    <>
    <section className={styles.concept}>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={concept} alt="青いカップのコーヒー" width="750" height="759" />
        </div>
        <div className={styles.desc}>
          <div className={styles.subtitle}>Concept</div>
          <h2 className={styles.title}>心静かにコーヒーを</h2>
          <div className={styles.text}>
            <p>
              立ち止まって、<br />
              空の青さを眺めて、<br />
              一息つきましょう。</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Concept
