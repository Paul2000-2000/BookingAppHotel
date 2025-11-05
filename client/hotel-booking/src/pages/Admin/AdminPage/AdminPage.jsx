import React from 'react'

import { useNavigate } from 'react-router-dom'

import styles from './AdminPage.module.scss'




 const AdminPage = () => {

    const navigate = useNavigate();


    const handleNavigateHome = () =>{
        navigate('/');
    }

    const handleNavigateHotelsPage = () =>{
        navigate('/hotels')
    }


  return (
    <div className={styles.class}>
        <div className={styles.content}>
            <button className='action'>
                See all clients
            </button>
            <button className='action' onClick={handleNavigateHotelsPage}>
                See all hotels
            </button>
            <button className='action' onClick={handleNavigateHome}>
                Go to Home Page
            </button>
        </div>
    </div>
  )
}

export default AdminPage;