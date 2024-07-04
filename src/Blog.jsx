import React from 'react'
import styles from '../css/style.module.css'
import Article from './Article.jsx'
import thumbnail01 from '../images/thumbnail01.jpg'
import thumbnail02 from '../images/thumbnail02.jpg'
import thumbnail03 from '../images/thumbnail03.jpg'
import thumbnail04 from '../images/thumbnail04.jpg'
import thumbnail05 from '../images/thumbnail05.jpg'
import thumbnail06 from '../images/thumbnail06.jpg'

function Blog() {
  const img = [
    thumbnail01,
    thumbnail02,
    thumbnail03,
    thumbnail04,
    thumbnail05,
    thumbnail06,
  ]

  const json = [
    {"alt" : "青いトラック", "title" : "コーヒーカー始めました。", "date" : "2030.08.08" },
    {"alt" : "牛乳", "title" : "濃厚クリーミーなミルクをどうぞ", "date" : "2030.08.05" },
    {"alt" : "音楽アプリ", "title" : "Sky Coffeeのオリジナル曲が完成！無料ダウンロード可能です。", "date" : "2030.08.02" },
    {"alt" : "山々", "title" : "ハイキング用のコーヒーを販売中です。", "date" : "2030.07.28" },
    {"alt" : "青とピンクのグラデーション", "title" : "ショップの壁を塗ってみました。", "date" : "2030.07.27" },
    {"alt" : "コーヒーと手帳", "title" : "ブログをはじめました。", "date" : "2030.07.26" },
  ]

  return (
    <>
    <section className={styles.blog}>
      <div className={styles.container}>
        <h2 className={styles.heading}>blog<span className={styles.subtitle}>ブログ</span></h2>
        <div className={styles.list}>
          {json.map((json, index)=>{
            return <React.Fragment key={index}><Article src={img[index]} alt={json.alt} title={json.title} date={json.date}/></React.Fragment>
          })}
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
