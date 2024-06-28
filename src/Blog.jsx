import styles from '../css/style.module.css'
import thumbnail01 from '../images/thumbnail01.jpg'
import thumbnail02 from '../images/thumbnail02.jpg'
import thumbnail03 from '../images/thumbnail03.jpg'
import thumbnail04 from '../images/thumbnail04.jpg'
import thumbnail05 from '../images/thumbnail05.jpg'
import thumbnail06 from '../images/thumbnail06.jpg'

function Blog() {
  return (
    <>
    <section className={styles.blog}>
      <div className={styles.container}>
        <h2 className={styles.heading}>blog<span className={styles.subtitle}>ブログ</span></h2>
        <div className={styles.list}>
          <div className={styles.item}>
            <a href="#">
              <div className={styles.img}><img src={thumbnail01} alt="青いトラック" width="700" height="357" /></div>
              <div className={styles.title}>コーヒーカー始めました。</div>
              <div className={styles.date}>2030.08.08</div>
            </a>
          </div>
          <div className={styles.item}>
            <a href="#">
              <div className={styles.img}><img src={thumbnail02} alt="牛乳" width="700" height="357" /></div>
              <div className={styles.title}>濃厚クリーミーなミルクをどうぞ</div>
              <div className={styles.date}>2030.08.05</div>
            </a>
          </div>
          <div className={styles.item}>
            <a href="#">
              <div className={styles.img}><img src={thumbnail03} alt="音楽アプリ" width="700" height="357" /></div>
              <div className={styles.title}>Sky Coffeeのオリジナル曲が完成！無料ダウンロード可能です。</div>
              <div className={styles.date}>2030.08.02</div>
            </a>
          </div>
          <div className={styles.item}>
            <a href="#">
              <div className={styles.img}><img src={thumbnail04} alt="山々" width="700" height="357" /></div>
              <div className={styles.title}>ハイキング用のコーヒーを販売中です。</div>
              <div className={styles.date}>2030.07.28</div>
            </a>
          </div>
          <div className={styles.item}>
            <a href="#">
              <div className={styles.img}><img src={thumbnail05} alt="青とピンクのグラデーション" width="700" height="357" /></div>
              <div className={styles.title}>ショップの壁を塗ってみました。</div>
              <div className={styles.date}>2030.07.27</div>
            </a>
          </div>
          <div className={styles.item}>
            <a href="#">
              <div className={styles.img}><img src={thumbnail06} alt="コーヒーと手帳" width="700" height="357" /></div>
              <div className={styles.title}>ブログをはじめました。</div>
              <div className={styles.date}>2030.07.26</div>
            </a>
          </div>
        </div>
        <a href="#" className={styles.btn}>
          ブログ一覧
        </a>
      </div>
    </section>
    </>
  )
}

export default Blog
