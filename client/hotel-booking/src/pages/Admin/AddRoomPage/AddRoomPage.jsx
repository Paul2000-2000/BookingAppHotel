import React, { useState } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router';

import { useParams } from 'react-router';

import styles from './AddRoomPage.module.scss';

const AddRoomPage = () => {


  
    const { id } = useParams();
    const [beds, setBeds] = useState('');
    const [description , setDescription] = useState('');
    const [price , setPrice] = useState('');
    const [image, setImage] = useState('');
    
    const navigate = useNavigate();
    
   

    const handleUploadImage = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
    
       
    
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'room_upload'); 
        formData.append('folder', 'rooms');
    
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


    const handleAddRoom = async () =>{

        if (!beds)
        {
            alert('Beds can not be null');
            return;
        }

        if (!description)
            {
                alert('Description can not be null');
                return;
            }

        if (!image)
        {
            alert('Image can not be null');
            return;
        }
        if (!price)
        {
            alert('Price can not be null');
            return;
        }
      

        const roomData = {

            beds,
            description,
            price,
            image,

        }

        console.log(roomData);

        try{

            const response = await axios.post(`http://127.0.0.1:8000/addRoom/${id}` , roomData);
            if (response.status == 200)
                {
                    alert('Room added succesfully');
                    setBeds("");
                    setImage("");
                    setDescription("");
                    setPrice('');
                    navigate(`/hotels/hotel/${id}`);
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
                Add Room Page
            </h2>
            <div className={styles.info}>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        Beds:
                    </label>
                    <input className={styles.input}
                        placeholder='Enter beds'
                        type='text'
                        value={beds}
                        onChange={(e) => setBeds(e.target.value)}
                    />
                </div>
             
                <div className={styles.infoOptions}>
                    <label className={styles.label}>


                        Description:
                    </label>
                    <textarea className={styles.inputT}
                    placeholder='Enter description'
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        Price:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter Price/night'
                    type='number'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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
                
                
            </div>

            <button className="action" onClick={handleAddRoom}>
                    Add Room
            </button>
        </div>
    </div>
  )
}

export default AddRoomPage
