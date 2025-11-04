import React from 'react'

import { useState } from 'react';
import { useNavigate } from 'react-router';

import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import styles from './Navbar.module.scss'

 const Navbar = () => {

    const [active , setActive] = useState(true);
    const navigate = useNavigate();

    const navigateLoRePage = () =>{
        navigate(
            '/lorepage'
        );
    }
    


  return (
    <div className={styles.class}>

        {

            active ?

            <div className={styles.content}>
                <h1 className={styles.logo}>trai Hotels</h1>
                <ul className={styles.menu}>
                    <li className={styles.priority}>Home</li>
                    <li className={styles.item}>Hotels for sale</li>
                    <li className={styles.item}>News</li>
                    <li className={styles.item}>Contacts</li>
                    <div className={styles.sign} onClick={() => navigateLoRePage()}>
                        <p>Sign In</p>
                        <CgProfile className={styles.icon}/>
                    </div>
                
                </ul>
                <IoMenu className={styles.icon} onClick={ () => setActive(!active)}/>
            </div>

            :

            <div className={styles.contentResp}>

                    <IoMdClose className={styles.close} onClick={ () => setActive(!active)}/>
                    <div className={styles.priority}>Home</div>
                    <div className={styles.item}>Hotels for sale</div>
                    <div className={styles.item}>News</div>
                    <div className={styles.item}>Contacts</div>
                    <div className={styles.sign} >
                        <p>Sign In</p>
                        <CgProfile className={styles.icon}/>
                    </div>

            </div>

        }


        
    </div>
  )
}

export default Navbar;
