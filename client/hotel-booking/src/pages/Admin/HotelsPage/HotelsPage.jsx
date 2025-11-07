import React, { useState , useEffect } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router'

import styles from './HotelsPage.module.scss'

import Hotel from '../../../components/Navbar/Hotel/Hotel'

 const HotelsPage = () => {

    const navigate = useNavigate();
    const [hotels, setHotels] = useState([]);

    const handleNavigateAddHotelPage = () =>
    {
        navigate('/addHotel');
    }

    useEffect(() => {
        const fetchHotels = async () =>{

          try{

            const response = await axios.get('http://127.0.0.1:8000/getAllHotels');
            if (response.status == 200)
            {
              console.log('Hotels get succesfully');
              setHotels(response.data);
            }
            else{
              console.log('Can not get the holtels');
            }

          } catch (err){
            console.log('Can not get the hotels' , err);
          }

        }

        fetchHotels();
    }, [])
    



  return (
    <div className={styles.class}>
        <div className={styles.content}>

            <button className={styles.action} onClick={handleNavigateAddHotelPage}>
                Add Hotel
            </button>

            <div className={styles.list}>
              {
                hotels.map( (hotel) =>(
                    <Hotel image={hotel.image} 
                           country={hotel.country}
                           city={hotel.city}
                           lvl={hotel.lvl}
                           rooms={hotel.rooms}
                           key={hotel.id}
                     />
                ) )
              }
                
            </div>

        </div>
    </div>
  )
}

export default HotelsPage
