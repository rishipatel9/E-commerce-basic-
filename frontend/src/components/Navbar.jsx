import React from 'react'
import styles from '../stylesheets/navbar.module.css'
import image from '../image.png'
export default function Navbar() {
  return (
   <div className={styles.Navbar}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div className={styles.box}>
          <input type="text" />
        </div>
      </div>
      <div>
        <ul>
          <li></li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>hello</li>
          <li>hello1</li>
          <li>hello2</li>
        </ul>
      </div>
      
   </div>
  )
}
