import styles from '../css/style.module.css'
import Header from './Header.jsx'
import Theme from './Theme.jsx'
import Nav from './Nav.jsx'
import Concept from './Concept.jsx'
import Blog from './Blog.jsx'
import Hooter from './Hooter.jsx'


function App() {
  return (
      <>
        <Header />
        <Theme />
        <Nav />
        <main className={styles.content}>
        <Concept />
        <Blog />
        </main>
        <Hooter />
      </>
  )
}

export default App
