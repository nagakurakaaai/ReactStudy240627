import PropTypes from 'prop-types';
import styles from '../css/style.module.css'

function Article(props) {
  const { src, alt, title, date } = props;
  return (
    <>
      <div className={styles.item}>
        <a href="#">
          <div className={styles.img}><img src={src} alt={alt} width="700" height="357" /></div>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>{date}</div>
        </a>
      </div>
    </>
  )
}

Article.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};

export default Article
