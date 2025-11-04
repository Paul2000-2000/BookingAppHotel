import React from 'react'

import styles from './HomePage.module.scss';

import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../views/Hero/Hero';

 const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      
    </div>
  )
}

export default HomePage;