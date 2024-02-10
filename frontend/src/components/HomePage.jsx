import React from 'react'
import DealCard from './homeComponents/DealCard'
import Division from './homeComponents/Division'
import Facilities from './homeComponents/facilities'
import FocalImage from './homeComponents/FocalImage'
import Navbar from './homeComponents/Navbar'

export default function HomePage() {
  return (
    <div className=" w-screen h-screen flex flex-col items-center ">
      <div><Navbar></Navbar></div>
      <div><FocalImage></FocalImage></div>
      <div><Facilities></Facilities></div>
      <div><Division children={"Deal of the Day"}></Division></div>
      <div><DealCard></DealCard></div>
    </div>

  )
}
