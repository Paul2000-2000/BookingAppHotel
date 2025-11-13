import React from 'react'

import styles from './Hotel.module.scss';

<<<<<<< HEAD:client/hotel-booking/src/components/Navbar/Hotel/Hotel.jsx
const Hotel = ( { image , country , city , lvl , rooms , key}) => {
=======
const Hotel = ( { id , image , country , city , name , lvl , rooms , key , onDelete}) => {

  const navigate = useNavigate();

  const handleDelete = () =>{
    onDelete(id)
  }

  const handleEdit = () =>{
    navigate(`/editHotel/${id}`);
  }

  
  const handleNavigateHotelPage = (id) =>{
    navigate(`/hotels/hotel/${id}`)
  }



>>>>>>> 8b93908 (hotelPage almost done , need resposnvei):client/hotel-booking/src/components/Hotel/Hotel.jsx
  return (
    <div className={styles.content} key={key} onClick={() => handleNavigateHotelPage(id)}> 
        <img src={image} alt='imageHotel' className={styles.image}/>
        <p className={styles.country}>Country: {country} </p>
        <p className={styles.city}>City: {city} </p>
        <p className={styles.lvl}>Lvls: {lvl} </p>
        <p className={styles.rooms}>Rooms/lvl: {rooms} </p>
    </div>
  )
}

export default Hotel
