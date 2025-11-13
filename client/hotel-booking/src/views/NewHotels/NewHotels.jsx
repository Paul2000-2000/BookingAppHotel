import React from 'react'

import style from './NewHotels.module.scss';

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import NewHotel from '../../components/NewHotel/NewHotel';



const NewHotels = () => {
  return (
    <div className={style.class}>
        <div className={style.content}>
            <h2 className={style.title}>New hotels</h2>
            <div className={style.listContent}>

                <FaArrowLeft className={style.iconDirect}/>

                <div className={style.list}>

                    <NewHotel/>
                    <NewHotel/>
                    <NewHotel/>
                    <NewHotel/>
                    <NewHotel/>

                </div>
                
                <FaArrowRight className={style.iconDirect}/>
            </div>
        </div>
    </div>
  )
}

export default NewHotels
