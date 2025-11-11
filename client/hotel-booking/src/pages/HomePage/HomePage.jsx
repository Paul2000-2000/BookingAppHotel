import React from 'react'

// import styles from './HomePage.module.scss';

import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../views/Hero/Hero';
import NewHotels from '../../views/NewHotels/NewHotels';
import News from '../../views/News/News';

 const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <NewHotels/>
      <News/>
    </div>
  )
}

export default HomePage;