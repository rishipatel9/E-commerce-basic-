import React, { useEffect, useState } from 'react'
import {remove } from "./../../utility/cart";
import { useDispatch } from 'react-redux';
import Quantityselector from './Quantityselector';
// import { count } from './Quantityselector';

export default function Cartproducts({imageUrl,title,price,id}) {
    const dispatch=useDispatch();

    const handleDelete= () =>{
        dispatch(remove(
            id,
        ))
    }
    const [quantity,setQuantity]= useState(1);
    const handleOnChange =(newCount) =>{
        setQuantity(newCount);
    }
    useEffect(() => {
        console.log('Count changed:', quantity);
      },quantity);
  return (
    <div className='w-full flex pr-10 py-5 justify-around items-center'>
        <div className='' style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}><img src={imageUrl} className="w-32 h-32" alt="product"/></div>
        <div className='font-semibold tracking-tighter'>
            <p>{title}</p>
        </div>
        <div className='font-semibold tracking-tighter'>
            <p>{price}</p>
        </div>
        <div className='font-semibold tracking-tighter'>
            <Quantityselector handleOnChange={handleOnChange}/>
        </div>
        <div className='font-semibold tracking-tighter'>
            {quantity}
        </div>
        <div className=''>
            <button onClick={() => handleDelete()}>X</button>
        </div>
    </div>
  )
}
