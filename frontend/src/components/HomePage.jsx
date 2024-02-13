import React from 'react'
import DealCard from './home/DealCard'
import Division from './home/Division'
import Facilities from './home/facilities'
import FocalImage from './home/FocalImage'
import Navbar from './home/Navbar'
import CardDist from './home/cardDist'

export default function HomePage() {
  return (
    <div className=" w-screen h-screen flex flex-col items-center ">
      <div><Navbar></Navbar></div>
      <div><FocalImage></FocalImage></div>
      <div><Facilities></Facilities></div>
      <div><Division children={"Deal of the Day"}></Division></div>
      <div><CardDist></CardDist></div>
    </div>

  )
}
