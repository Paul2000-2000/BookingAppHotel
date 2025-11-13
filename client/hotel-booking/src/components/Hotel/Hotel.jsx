import React from 'react'
import { useNavigate } from 'react-router';

import styles from './Hotel.module.scss';


const Hotel = ( { id , image , country , city ,description, name , lvl , rooms , key , onDelete}) => {

  const navigate = useNavigate();

  const handleDelete = (id) =>{
    onDelete(id)
  }

  const handleEdit = (id) =>{
    navigate(`/editHotel/${id}`);
  }

  
  const handleNavigateHotelPage = (id) =>{
    navigate(`/hotels/hotel/${id}`)
  }



  return (
    <div className={styles.content} key={key} onClick={() => handleNavigateHotelPage(id)}> 
        <img src={image} alt='imageHotel' className={styles.image}/>
        <p className={styles.country}>Country: {country} </p>
        <p className={styles.city}>City: {city} </p>
        <p className={styles.city}>Name :{name}</p>
        <p className={styles.city}>Description :{description}</p>
        <p className={styles.lvl}>Lvls: {lvl} </p>
        <p className={styles.rooms}>Rooms/lvl: {rooms} </p>
        <button className='action' onClick={(e) => {handleEdit(id)
          e.stopPropagation();
        }}>
          Edit Hotel
        </button>
        <button className='action' onClick={(e) => {
          e.stopPropagation();
          handleDelete(id)}}>
          Delete
        </button>
    </div>
  )
}

export default Hotel
