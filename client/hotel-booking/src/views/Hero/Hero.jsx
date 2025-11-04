import React from 'react'

import styles from './Hero.module.scss'

 const Hero = () => {
  return (
    <div className={styles.class}>
        <div className={styles.content}>
            <h2 className={styles.title}>The ease of buying 
              <br/>
              a dream hotel</h2>


            <div className={styles.options}>

              <div className={styles.headers}>
                  <p className={styles.priority}>BUY HOTEL</p>
                  <p className={styles.header}>TRADING</p>
                  <p className={styles.header}>FEATURED</p>
              </div>
              <div className={styles.values}>
                <div className={styles.optionsvalues}>
                <div className={styles.labans}>
                  <label className={styles.label}>Country</label>
                  <p className={styles.select}>United States</p>
                </div>
                <div className={styles.labans}>
                  <label className={styles.label}>City</label>
                  <p className={styles.select}>Miami</p>
                </div>
                <div className={styles.labans}>
                  <label className={styles.label}>Property Type</label>
                  <p className={styles.select}>Hotels</p>
                </div>
                <div className={styles.labans}>
                  <label className={styles.label}>Prince</label>
                  <p className={styles.select}>3000 E</p>
                </div>
                </div>
                <button className={styles.action}>
                  Search
                </button>
              </div>  

            </div>  
        </div>
    </div>
  )
}

export default Hero
