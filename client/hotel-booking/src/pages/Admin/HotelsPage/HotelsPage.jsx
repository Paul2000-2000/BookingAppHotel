import React from 'react'

import { useNavigate } from 'react-router'

import styles from './HotelsPage.module.scss'

 const HotelsPage = () => {

    const navigate = useNavigate();

    const handleNavigateAddHotelPage = () =>
    {
        navigate('/addHotel');
    }

  return (
    <div className={styles.class}>
        <div className={styles.content}>

            <button className='action' onClick={handleNavigateAddHotelPage}>
                Add Hotel
            </button>

        </div>
    </div>
  )
}

export default HotelsPage
