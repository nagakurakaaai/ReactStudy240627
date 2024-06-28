import styles from '../css/style.module.css'
import logo from '../images/logo.png'


function Header() {
  return (
    <>
    <header className={styles.header}>
    <h1 className={styles.logo}> <a href="#"><img src={logo} alt="SKY COFFEE"/></a></h1>
  </header>
    </>
  )
}

export default Header
