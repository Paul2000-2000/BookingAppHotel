import React from 'react'

// import styles from './HomePage.module.scss';

import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../views/Hero/Hero';
import NewHotels from '../../views/NewHotels/NewHotels';

 const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <NewHotels/>
    </div>
  )
}

export default HomePage;