import React, { useEffect, useState } from 'react'
import {remove } from "./../../utility/cart";
import { useDispatch, useSelector } from 'react-redux';
import { calculate } from './../../utility/productQuantity';

export default function Cartproducts({imageUrl,title,price,id}) {
    const finalTotal=useSelector(state => state.total);
    const [count, setCount] = useState(1);
  const increment = () => {
    setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };
    const dispatch=useDispatch();
    const handleDelete= () =>{
        dispatch(remove(
            id,
        ))
    }
    const handleTotal =() =>{
      console.log()
      dispatch(calculate(
        {quantity:count,
          price:price,
          id:id
        }
      ));
    }
  return (
    <div className='w-full flex pr-10 py-5 justify-around items-center'>
        <div className='' style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}><img src={imageUrl} className="w-32 h-32" alt="product"/></div>
        <div className='font-semibold tracking-tighter'>
            <p>{title}</p>
        </div>
        <div className='font-semibold tracking-tighter'>
            <p>${price}</p>
        </div>
        <div className='font-semibold tracking-tighter'>
            <div className="flex justify-center items-center select-none border border-solid border-lightgrey p-1">
                <span className="hover:text-mainTheme" onClick={decrement}>-</span>
                <span className=" mx-2 px-2" style={{borderLeft:"1px solid rgba(0,0,0,0.2)",borderRight:"1px solid rgba(0,0,0,0.2)"}}> {`${count}`} </span>
                <span className="hover:text-mainTheme" onClick={increment}>+</span>
            </div>
        </div>
        <div className='font-semibold tracking-tighter'>
            <p onChange={handleTotal()}>${Math.round(count*price)}</p>
        </div>
        <div className=''>
            <button className="transition-all" onClick={() => handleDelete()}>X</button>
        </div>
    </div>
  )
}
