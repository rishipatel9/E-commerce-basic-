import React from 'react'
import styles from "../stylesheets/RegisterPage.module.css"

export default function RegisterPage() {
  return (
    <div className={styles.container}>
        <div className={styles.box}> 
          <h1>Registeration</h1>
          <div className={styles.inputRows}>
            <div className={styles.headingInput}>
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder='Enter your name' />
            </div>
            <div className={styles.headingInput}>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Enter your username' />
            </div>
          </div>
          <div className={styles.inputRows}>
            <div className={styles.headingInput}>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter your email' />
            </div>
            <div className={styles.headingInput}>
            <label htmlFor="">Phone Number</label>
            <input type="text" placeholder='Enter your number' />
            </div>
          </div>
          <div className={styles.inputRows}>
            <div className={styles.headingInput}>
            <label htmlFor="">Password</label>
            <input type="text" placeholder='Enter your password' />
            </div>
            <div className={styles.headingInput}>
            <label htmlFor="">Confirm Password</label>
            <input type="text" placeholder='Enter your password' />
            </div>
          </div>
        <div className={styles.genderBox}>
          <div className={styles.genderWrap}>
          <input type="radio" />
          <label htmlFor=""><p>Male</p></label>
          </div>
          <div className={styles.genderWrap}>
          <input type="radio" />
          <label htmlFor=""><p>Female</p></label>
          </div>
          <div className={styles.genderWrap}>
          <input type="radio" />
          <label htmlFor=""><p>Other</p></label>
          </div>
        </div>
        <button className={styles.subBtn}>
          Register
        </button>
        </div> 
    </div>
  )
}
