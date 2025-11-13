import React from 'react'

import style from './NewHotel.module.scss'

import { CiSaveDown2 } from "react-icons/ci";

import { FaLocationDot } from "react-icons/fa6";

import { FaBed } from "react-icons/fa";

const NewHotel = () => {
  return (
    <div className={style.item}>
    <div className={style.show}>
        <CiSaveDown2 className={style.save}/>
        <p className={style.price}>$ 15,000,000.00</p>
    </div>
    <div className={style.info}>
        <div className={style.infoInfo}>
            <FaLocationDot/>   
            <p className={style.country}>Venezia, Italia</p>
        </div>
        <div className={style.infoInfo}>
            <FaBed/>
            <p className={style.rooms}>250 rooms</p>
        </div>
    </div>
    <button className={style.more}>
        SHOW MORE...
    </button>
    </div>
  )
}

export default NewHotel
