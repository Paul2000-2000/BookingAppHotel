import React from 'react'

import styles from './EditHotelPage.module.scss';

import { useParams } from 'react-router';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router';

const EditHotelPage = () => {

    const {id} = useParams();
    const [hotel , setHotel] = useState(null);
    const navigate = useNavigate();

    const [editCountry, setEditCountry] = useState('');
    const [editCity, setEditCity] = useState('');
    const [editName, setEditName] = useState('');
<<<<<<< HEAD
    const [editDescription , setEditDescription] = useState('');
=======
>>>>>>> origin/main
    const [editImage, setEditImage] = useState('');
    const [editLvl, setEditLvl] = useState('');
    const [editRooms, setEditRooms] = useState('');


   

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
          setEditImage(data.secure_url);
          
        } catch (err) {
          console.error('Upload failed:', err);
          alert('Image upload failed');
        } 
      };


      const handleEditHotel = async () =>{

        if (!editCity && !editCity && !editName && !editImage && !editLvl && !editRooms)
        {
            alert('There is nothing to edit');
            return;
        }

        const country = editCountry || hotel?.country;
        const city = editCity || hotel?.city;
        const name = editName || hotel?.name;
<<<<<<< HEAD
        const description = editDescription || hotel?.description;
=======
>>>>>>> origin/main
        const image = editImage || hotel?.image;
        const lvl = editLvl || hotel?.lvl;
        const rooms = editRooms || hotel?.rooms;
     
      
        const hotelData = {

            id,
            country,
            city,
            name,
<<<<<<< HEAD
            description,
=======
>>>>>>> origin/main
            image,
            lvl,
            rooms


        }

        console.log(hotelData);

        try{

            const response = await axios.put(`http://127.0.0.1:8000/editHotel/${id}` , hotelData);
            if (response.status == 200)
                {
                    alert('Hotel edited succesfully');
                    setEditCountry("");
                    setEditCity("");
                    setEditName("");
<<<<<<< HEAD
                    setEditDescription("");
=======
>>>>>>> origin/main
                    setEditImage("");
                    setEditLvl('');
                    setEditRooms('');
                    navigate('/hotels');
                    
                }

        }catch(err){
                alert(err);
                console.log('Error is' , err);
        }



        
    }
    


  return (
    <div className={styles.class}>
        <h2 className={styles.title}>Edit Hotel Page</h2>
        <div className={styles.current}>
        <div className={styles.infoCurrent}>
                <h2>Current Hotel</h2>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        Country:
                    </label>
                   <p> {hotel?.country} </p>
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        City:
                    </label>
                    <p>{hotel?.city}</p>
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        Name:
                    </label>
                    <p>{hotel?.name}</p>
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
<<<<<<< HEAD
                        Description:
                    </label>
                    <p>{hotel?.description}</p>
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
=======
>>>>>>> origin/main
                        Image:
                    </label>
                    <img src={hotel?.image} style={{width:"200px" , height:"200px"}}/>
                </div>
                <div className={styles.infoOptions}>
                <label className={styles.label}>
                        Number of levels:
                    </label>
                    <p>{hotel?.lvl}</p>
                </div>
                <div className={styles.infoOptions}>
                <label className={styles.label}>
                        Number of rooms/level:
                    </label>
                    <p>{hotel?.rooms}</p>
                </div>
        </div>
        <div className={styles.info}>
                <h2>Edit Hotel</h2>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        Country:
                    </label>
                    <input className={styles.input}
                        placeholder='Enter country'
                        type='text'
                        value={editCountry}
                        onChange={(e) => setEditCountry(e.target.value)}
                    />
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        City:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter city'
                    type='text'
                    value={editCity}
                    onChange={(e) => setEditCity(e.target.value)}
                    />
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        Name:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter Name'
                    type='text'
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    />
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
<<<<<<< HEAD
                        Description:
                    </label>
                    <textarea className={styles.inputT}
                    placeholder='Enter Description'
                    type='text'
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    />
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
=======
>>>>>>> origin/main
                        Image:
                    </label>
                    <input type="file" accept="image/*" 
                    onChange={handleUploadImage}
                    />
                     {editImage && (
              <img
                src={editImage}
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
                    value={editLvl}
                    onChange={(e) => setEditLvl(e.target.value)}
                    />
                </div>
                <div className={styles.infoOptions}>
                <label className={styles.label}>
                        Number of rooms/level:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter rooms'
                    type='number'
                    value={editRooms}
                    onChange={(e) => setEditRooms(e.target.value)}
                    />
                </div>
                <button className="action" onClick={handleEditHotel}>
                    Edit Hotel
                 </button>
        </div>

        </div>
    </div>
  )
}

export default EditHotelPage
