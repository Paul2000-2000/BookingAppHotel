import React from 'react'

import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.class}>
        <div className={style.contentOne}>
            <h2 className={style.title}>
            If you have a hotel that you want to sell, we sell it for you.
            </h2>
            <button className={style.action}>  
                Start here...
            </button>
        </div>
        <div className={style.contentTwo}>
            <div className={style.info}>
                <h6 className={style.title}>CONTACT DETAILS</h6>
                <p className={style.element}>Tel : <span>+(504) 2276-0010</span></p>
                <p className={style.element}>Mov: <span>+(504) 2276-0010</span></p>
                <p className={style.element}>E-mail: <span>infozolutto@zolutto.com</span></p>
            </div>
            <div className={style.info}>
                <h6 className={style.title}>MENU</h6>
                <p className={style.element}>Home</p>
                <p className={style.element}>hotel for Sales</p>
                <p className={style.element}>News</p>
                <p className={style.element}>Contact</p>
            </div>
            <div className={style.info}>
                <h6 className={style.title}>OUR PARTNERS</h6>
                <p className={style.element}>Hilton</p>
                <p className={style.element}>Marriott</p>
            </div>
            <div className={style.message}>
                <p className={style.description}>
                We have a specialized team of Professionals, 
                some of us with over 30 years in the hotel industry and other 
                in the real estate, combined makes this a winning team ready to 
                help you. We offer professional advise, maintaining discretion...
                </p>
                <button className={style.more}>Read more...</button>
            </div>
        </div>
    </div>
  )
}

export default Footer
