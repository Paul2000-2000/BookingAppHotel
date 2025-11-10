import React, { useState } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router';

import styles from './AddHotelPage.module.scss'



const AddHotelPage = () => {

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [lvl, setLvl] = useState('');
    const [rooms, setRooms] = useState('');
    const navigate = useNavigate();
    
   

    const handleUploadImage = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
    
       
    
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'hotel_upload'); 
        formData.append('folder', 'hotels');
    
        try {
          const res = await fetch('https://api.cloudinary.com/v1_1/dbzgwfor2/image/upload', {
            method: 'POST',
            body: formData,
          });
    
          const data = await res.json();
          setImage(data.secure_url);
          
        } catch (err) {
          console.error('Upload failed:', err);
          alert('Image upload failed');
        } 
      };


    const handleAddHotel = async () =>{

        if (!country)
        {
            alert('Country can not be null');
            return;
        }

        if (!city)
        {
            alert('City can not be null');
            return;
        }

        if (!name)
        {
            alert('Name can not be null');
            return;
        }

        if (!image)
        {
            alert('Image can not be null');
            return;
        }
        if (!lvl)
        {
            alert('Lvl can not be null');
            return;
        }
        if (!rooms)
        {
            alert('Rooms can not be null');
            return;
        }

        const hotelData = {

            country,
            city,
            name,
            image,
            lvl,
            rooms


        }

        console.log(hotelData);

        try{

            const response = await axios.post("http://127.0.0.1:8000/addHotel" , hotelData);
            if (response.status == 200)
                {
                    alert('Hotel added succesfully');
                    setCountry("");
                    setCity("");
                    setName("");
                    setImage("");
                    setLvl('');
                    setRooms('');
                    navigate('/addHotel');
                }

        }catch(err){
                alert(err);
                console.log('Error is' , err);
        }



        
    }

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
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        City:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter city'
                    type='text'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        Name:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter Name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        Image:
                    </label>
                    <input type="file" accept="image/*" 
                    onChange={handleUploadImage}
                    />
                     {image && (
              <img
                src={image}
                alt="Uploaded"
                style={{ width: '150px', marginTop: '10px', borderRadius: '8px' }}
              />
            )}
                </div>
                <div className={styles.infoOptions}>
                <label className={styles.label}>
                        Number of levels:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter levels'
                    type='number'
                    value={lvl}
                    onChange={(e) => setLvl(e.target.value)}
                    />
                </div>
                <div className={styles.infoOptions}>
                <label className={styles.label}>
                        Number of rooms/level:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter rooms'
                    type='number'
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    />
                </div>
            </div>

            <button className="action" onClick={handleAddHotel}>
                    Add Hotel
            </button>
        </div>
    </div>
  )
}

export default AddHotelPage