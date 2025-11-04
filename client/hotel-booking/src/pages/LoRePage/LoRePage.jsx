import React from 'react'

import { useState } from 'react';

import styles from './LoRePage.module.scss';

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

 const LoRePage = () => {

    const [active , setActive] = useState(true);

  return (
    <div className={styles.class}>
        {
            active ? 
            <div className={styles.content}>
            <FaArrowRight className={styles.iconR} onClick={() => setActive(!active)}/>
            <h2 className={styles.title}>
                Sign Up
            </h2>
            <div className={styles.info}>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        Email:
                    </label>
                    <input className={styles.input}
                        placeholder='Enter your e-mail'
                        type='email'
                    />
                </div>
                <div className={styles.infoOptions}>
                <label className={styles.label}>
                        Password:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter your password'
                    type='password'
                    />
                </div>
                <div className={styles.infoOptions}>
                <label className={styles.label}>
                        Full Name:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter your name'
                    type='text'
                    />
                </div>
            </div>

            <buton className={styles.action}>
                    Register
            </buton>
        </div>

        :

        <div className={styles.content}>
            <FaArrowLeft className={styles.iconL} onClick={() => setActive(!active)}/>
            <h2 className={styles.title}>
                Sign In
            </h2>
            <div className={styles.info}>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        Email:
                    </label>
                    <input className={styles.input}
                        placeholder='Enter your e-mail'
                        type='email'
                    />
                </div>
                <div className={styles.infoOptions}>
                <label className={styles.label}>
                        Password:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter your password'
                    type='password'
                    />
                </div>
               
            </div>

            <buton className={styles.action}>
                    Login
            </buton>
        </div>
        }
        
    </div>
  )
}

export default LoRePage;

