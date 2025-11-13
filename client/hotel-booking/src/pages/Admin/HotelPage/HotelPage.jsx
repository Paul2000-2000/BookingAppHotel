import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import style from './HotelPage.module.scss';

const HotelPage = () => {

  const [hotel, setHotel] = useState();
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/getHotel/${id}`);
        setHotel(response.data);
      } catch (err) {
        console.error("Nu pot prelua hotelul:", err);
      }
    };
  
    fetchHotel();
  }, [id]);
 
  const handleNavigateAddRoom = (id) =>{
      navigate(`/addRoom/${id}`)
  }
  


  return (
    <div className={style.class}>
        <div className={style.content}> 
              <div className={style.hotel}>
                <img src={hotel?.image} alt='image' className={style.image}/>
                <div className={style.hotelInfo}>
                  <p>Name: {hotel?.name}</p>
                  <p>Country: {hotel?.country}</p>
                  <p>City: {hotel?.city}</p>
                </div>
                <div className={style.hotelInfo}>
                  <p>Lvl: {hotel?.lvl}</p>
                  <p>Rooms/lvl :{hotel?.rooms}</p>
                </div>
              </div> 
              <div className={style.roomsAndLvl}>
                <button className='action' onClick={() => handleNavigateAddRoom(id)}>Add Room</button>
                <p>There are no rooms added yet.</p>
              </div>
        </div>
    </div>
  )
}

export default HotelPage
