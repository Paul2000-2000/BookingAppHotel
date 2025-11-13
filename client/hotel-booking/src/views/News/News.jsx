import React from 'react'

import style from './News.module.scss'

import NewsComp from '../../components/NewsComp/NewsComp'



const News = () => {
  return (
    <div className={style.class}>
      <div className={style.content}>
        <div className={style.contentLeft}>
            <h2 className={style.title}>Today news</h2>
            <div className={style.mainNews}>
                <p className={style.description}>
                    Italy Venice seeks more investment in the real estate...
                </p>
                <p className={style.date}>
                    Mayo 21, 2023
                </p>
            </div>
        </div>

        <div className={style.contentRight}>
                <h6 className={style.title}>More News</h6>
                <div className={style.list}>
                     
                    <NewsComp/>
                    <NewsComp/>
                    <NewsComp/>
                    <NewsComp/>
                     
                </div>
        </div>
      </div>
    </div>
  )
}

export default News
