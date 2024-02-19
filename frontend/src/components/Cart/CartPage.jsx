import React from 'react'
import Navbar from '../home/Navbar'
import Cartitems from './Cartitems'
export default function CartPage() {
  return (
    
    <div className=" w-screen h-screen flex flex-col items-center ">
      <div><Navbar></Navbar></div>
      <div><Cartitems></Cartitems></div>
    </div>
  )
}
