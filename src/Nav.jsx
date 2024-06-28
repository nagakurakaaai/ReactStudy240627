import styles from '../css/style.module.css'

function Nav() {
  return (
    <>
    <nav className={styles.globalNav}>
    <ul>
      <li><a href="#">menu</a></li>
      <li><a href="#">blog</a></li>
      <li><a href="#">access</a></li>
    </ul>
    </nav>
    </>
  )
}

export default Nav
