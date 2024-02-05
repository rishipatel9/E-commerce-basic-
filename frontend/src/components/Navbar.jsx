import React from 'react'
import styles from '../stylesheets/navbar.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope,faFacebook } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
  return (
    <div className={styles.navbar}> 
      <div className={styles.navTop}>
        <div className={styles.left}>
          <i className="fa fa-envelope"></i> 
         info.clara@gmail.com
         {/* <span className={styles.vline}></span> */}
         <i className="fa fa-phone"></i>
         +6621395124
        </div>
        <div className={styles.right}>
        <img src="https://fontawesome.com/icons/facebook?f=brands&s=solid" alt="" />
        </div>
      </div>
      <div className={styles.navBtm}>
      </div>
    </div>
  )
}
// https://inkbotdesign.com/wp-content/uploads/2023/03/image-14-1024x638.png
