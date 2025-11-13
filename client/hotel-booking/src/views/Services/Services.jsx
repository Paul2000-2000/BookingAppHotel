import React from 'react'

import style from './Services.module.scss'

import { FaHotel } from "react-icons/fa";


const Services = () => {
  return (
    <div className={style.class}> 
        <div className={style.content}>
        <h2 className={style.title}>Our services</h2>
        <div className={style.list}>
            <div className={style.item}>
                <FaHotel className={style.icon}/>
                <h4 className={style.headline}>
                    Selling Hotels
                </h4>
                <p className={style.description}>
                With traiHotels you can sell your hotel, 
                placing the information requested, quickly 
                and safely...
                </p>
            </div>
            <div className={style.item}>
                <FaHotel className={style.icon}/>
                <h4 className={style.headline}>
                    Selling Hotels
                </h4>
                <p className={style.description}>
                With traiHotels you can sell your hotel, 
                placing the information requested, quickly 
                and safely...
                </p>
            </div>
            <div className={style.item}>
                <FaHotel className={style.icon}/>
                <h4 className={style.headline}>
                    Selling Hotels
                </h4>
                <p className={style.description}>
                With traiHotels you can sell your hotel, 
                placing the information requested, quickly 
                and safely...
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Services
