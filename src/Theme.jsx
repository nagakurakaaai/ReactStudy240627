import styles from '../css/style.module.css'
import pcMainVisual from '../images/pc_main-visual.jpg'


function Theme() {
  return (
    <>
    <div className={styles.mainVisual}>
    <picture>
      <source media="(min-width: 768px)" srcSet={pcMainVisual} />
      <img src={pcMainVisual} alt="複数の青いカップのコーヒー" />
    </picture>
    </div>
    </>
  )
}

export default Theme
