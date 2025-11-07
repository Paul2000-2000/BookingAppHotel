import React from 'react'

import styles from './Hotel.module.scss';

const Hotel = ( { image , country , city , lvl , rooms , key}) => {
  return (
    <div className={styles.content} key={key}> 
        <img src={image} alt='imageHotel' className={styles.image}/>
        <p className={styles.country}>Country: {country} </p>
        <p className={styles.city}>City: {city} </p>
        <p className={styles.lvl}>Lvls: {lvl} </p>
        <p className={styles.rooms}>Rooms/lvl: {rooms} </p>
    </div>
  )
}

export default Hotel
