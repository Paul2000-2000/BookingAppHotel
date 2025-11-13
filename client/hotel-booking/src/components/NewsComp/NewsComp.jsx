import React from 'react'

import style from './NewsComp.module.scss';

import moreNews from '../../assets/morenewsimg.png';

const NewsComp = () => {
  return (
    <div className={style.item}>
                        <div className={style.info}>
                            <h4 className={style.edit}>CCC</h4>
                            <h6 className={style.headline}>
                            Italy Venice seeks more investment in the real estate...
                            </h6>
                            <p className={style.description}>
                            Italy Venice seeks more investment in the real estate world.
                            </p>
                            <p className={style.date}>
                            Mayo 21, 2023
                            </p>
                        </div>
                        <img src={moreNews} alt='morenews' className={style.image}/>
                     </div>
  )
}

export default NewsComp
