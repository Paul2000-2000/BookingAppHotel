import React from 'react'

import style from './Subscribe.module.scss';

import Hilton from '../../assets/subscribe/hilton.png';
import Marriot from '../../assets/subscribe/marr.png';

const Subscribe = () => {
  return (
    <div className={style.class}>
      <div className={style.content}>
            <div className={style.sponsors}>
                <img src={Marriot} alt='sponsor' className={style.image}/>
                <img src={Hilton} alt='sponsor' className={style.image}/>
                <img src={Marriot} alt='sponsor' className={style.image}/>
                <img src={Hilton} alt='sponsor' className={style.image}/>
                <img src={Marriot} alt='sponsor' className={style.image}/>
            </div>
            <div className={style.text}>
                <h2 className={style.title}>Subscribe & get news and top hotels</h2>
                <p className={style.description}>At the moment of subscribing you accept to be a VIP 
                    member of Zolutto, you will receive news and valuable 
                    information</p>
                <div className={style.send}>
                    <input type='e-mail' className={style.input}/>
                    <button className={style.action}>
                        Subscription
                    </button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Subscribe
