import React from 'react'
// import { useState } from 'react';
import { useRef } from 'react'
import styles from "../stylesheets/RegisterPage.module.css"

export default function RegisterPage() {
  const fullName=useRef(null);
  const userName=useRef(null);
  const email=useRef(null);
  const phoneNumber=useRef(null);
  const password=useRef(null);
  const confPassword=useRef(null);
  const gender=useRef(null);  
  // const [emailError,setEmailError]= useState("");
  // const validate= () =>{
  //   if(!email.current.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  //       setEmailError("invalid email");
  //     return false
  //   }
  // }
  const formHandler =(event) =>{
      event.preventDefault();
      const formData ={
        fullname:fullName.current.value,
        username:userName.current.value,
        email:email.current.value,
        phonenumber:phoneNumber.current.value,
        password:password.current.value,
        gender:gender.current.value
      }
      console.log(formData);
 
  }
    return (
      <div className={styles.container}>
        <div className={styles.box}> 
          <form onSubmit={formHandler}>
            <h1>Registeration</h1>
            <div className={styles.inputRows}>
              <div className={styles.headingInput}>
              <label htmlFor="">Full Name</label>
              <input type="text" id='fullname' placeholder='Enter your name' ref={fullName} />
              </div>
              <div className={styles.headingInput}>
              <label htmlFor="">Username</label>
              <input type="text" id='username' placeholder='Enter your username' ref={userName}/>
              </div>
            </div>
            <div className={styles.inputRows}>
              <div className={styles.headingInput}>
              <label htmlFor="">Email</label>
              <input type="text" id="email" 
               placeholder='Enter your email' ref={email} />
              </div>
              <div className={styles.headingInput}>
              <label htmlFor="">Phone Number</label>
              <input type="text" id="phonenumber"  placeholder='Enter your number' ref={phoneNumber} />
              
              </div>
            </div>
            <div className={styles.inputRows}>
              <div className={styles.headingInput}>
              <label htmlFor="">Password</label>
              <input type="password" placeholder='Enter your password'  autoComplete="on" ref={password}/>
              </div>
              <div className={styles.headingInput}>
              <label htmlFor="">Confirm Password</label>
              <input type="password" placeholder='Enter your password'  autoComplete="on" ref={confPassword}  />
              </div>
            </div>
            <div className={styles.genderBox}>
              <div className={styles.genderWrap}>
                <input type="radio" name='foo' ref={gender} value="Male" />
                <label htmlFor=""><p>Male</p></label>
              </div>
              <div className={styles.genderWrap}>
              <input type="radio" name='foo' ref={gender} value="Female"/>
              <label htmlFor=""><p>Female</p></label>
              </div>
              <div className={styles.genderWrap}>
              <input type="radio" name='foo' ref={gender} value="Other" />
              <label htmlFor=""><p>Other</p></label>
              </div>
            </div>
            <button className={styles.subBtn} type="submit">
              Register
            </button>
          </form>
        </div> 
      </div>
      )
}
