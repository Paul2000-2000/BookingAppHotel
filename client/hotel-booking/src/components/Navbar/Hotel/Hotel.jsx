import React from 'react'

import { useNavigate } from 'react-router';


import styles from './Hotel.module.scss';

const Hotel = ( { id , image , country , city , name , lvl , rooms , key , onDelete}) => {

  const navigate = useNavigate();

  const handleDelete = () =>{
    onDelete(id)
  }

  const handleEdit = () =>{
    navigate(`/editHotel/${id}`);
  }


  return (
    <div className={styles.content} key={key}> 
        <img src={image} alt='imageHotel' className={styles.image}/>
        <p className={styles.country}>Country: {country} </p>
        <p className={styles.city}>City: {city} </p>
        <p className={styles.city}>Name: {name} </p>
        <p className={styles.lvl}>Lvls: {lvl} </p>
        <p className={styles.rooms}>Rooms/lvl: {rooms} </p>
        <button className={styles.action} onClick={handleEdit}>
          Edit
        </button>
        <button className={styles.action} onClick={handleDelete}>
          Delete
        </button>
    </div>
  )
}

export default Hotel
