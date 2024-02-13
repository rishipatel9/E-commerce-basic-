import React from 'react'
import styles from "../../stylesheets/FocalImage.module.css"
import image from "../../assets/vege.png"
export default function FocalImage() {
  return (
    <div className={styles.focal} >
        <div className="flex flex-col text-left ">
          <div className='leading-10  text-mainTheme text-2xl tracking-tighter'>Festive Offer</div>
          <div className='leading-10 font-bold text-5xl tracking-tighter'>Fruits & Vegetables</div>
          <div className='leading-10 text-mainTheme font-semibold text-xl tracking-tighter'>$10 off all orders over $20.</div>
          <div className=' text-white ' ><button className='rounded-3xl mt-5 px-10 bg-mainTheme text-white'>Shop Now</button></div>
        </div>
        <div>
            <img src={image} className="h-96" alt="" />
        </div>
    </div>
  )
}
