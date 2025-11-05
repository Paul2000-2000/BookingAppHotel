import React from 'react'

import { useState } from 'react';
import axios from 'axios'

import styles from './LoRePage.module.scss';

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

 const LoRePage = () => {

    const [active , setActive] = useState(true);
    const [emailRegister , setEmailRegister] = useState("");
    const [passwordRegister , setPasswordRegister] = useState("");
    const [nameRegister, setNameRegister] = useState("");

    const handleRegisterUser = async () =>{

        if (!emailRegister)
        {
            alert('Email can not be null');
            return;
        }

        if (!passwordRegister)
        {
            alert('Password can not be null');
            return;
        }

        if (!nameRegister)
        {
            alert('Name can not be null');
            return;
        }

        const userData = {

            emailRegister,
            passwordRegister,
            nameRegister

        }

        try{

            const response = await axios.post("http://127.0.0.1:8000/addUser" , userData);
            if (response.status == 200)
                {
                    alert('User added succesfully');
                    setEmailRegister("");
                    setPasswordRegister("");
                    setNameRegister("");
                    setActive(!active);
                }

        }catch(err){
                alert(err);
                console.log('Error is' , err);
        }



        
    }

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
                        value={emailRegister}
                        onChange={(e) => setEmailRegister(e.target.value)}
                    />
                </div>
                <div className={styles.infoOptions}>
                    <label className={styles.label}>
                        Password:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter your password'
                    type='password'
                    value={passwordRegister}
                    onChange={(e) => setPasswordRegister(e.target.value)}
                    />
                </div>
                <div className={styles.infoOptions}>
                <label className={styles.label}>
                        Full Name:
                    </label>
                    <input className={styles.input}
                    placeholder='Enter your name'
                    type='text'
                    value={nameRegister}
                    onChange={(e) => setNameRegister(e.target.value)}
                    />
                </div>
            </div>

            <button className={styles.action} onClick={handleRegisterUser}>
                    Register
            </button>
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

            <button className={styles.action}>
                    Login Here
            </button>
        </div>
        }
        
    </div>
  )
}

export default LoRePage;

