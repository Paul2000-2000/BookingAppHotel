import React from 'react'

import styles from './AddHotelPage.module.scss'

const AddHotelPage = () => {
  return (
    <div className={styles.class}>
 <div className={styles.content}>
            
            <h2 className={styles.title}>
                Add Hotel Page
            </h2>
            <div className={styles.info}>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        Country:
                    </label>
                    <input className={styles.input}
                        placeholder='Enter country'
                        type='text'
                        
                    />
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        City:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter city'
                    type='text'
                    
                    />
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        Image:
                    </label>
                    <input type="file" accept="image/*" />
                </div>
                <div className={styles.infoOptions}>
                <label className={styles.label}>
                        Number of levels:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter levels'
                    type='number'
                    
                    />
                </div>
                <div className={styles.infoOptions}>
                <label className={styles.label}>
                        Number of rooms/level:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter rooms'
                    type='number'
                    
                    />
                </div>
            </div>

            <button className="action" >
                    Add Hotel
            </button>
        </div>
    </div>
  )
}

export default AddHotelPage