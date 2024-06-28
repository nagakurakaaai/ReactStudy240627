import styles from '../css/style.module.css'
import logoWhite from '../images/logo-white.png'


function Hooter() {
  return (
    <>
    <footer className={styles.footer}>
    <div className={styles.logo}><a href="#"><img src={logoWhite} alt="SKY COFFEE" width="200" height="40" /></a></div>
    <div className={styles.copyright}>&copy;Sky Coffee</div>
    </footer>
    </>
  )
}

export default Hooter
