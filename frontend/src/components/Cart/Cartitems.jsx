import React from 'react'
import { useEffect ,useState } from 'react';
import { useSelector } from 'react-redux';
import Cartemptymsg from './Cartemptymsg';
import Cartproducts from './Cartproducts';
import Division from '../home/Division';

export default function Cartitems() {
  const cart=useSelector(state => state.cart.cart);
  const FinalTotal=useSelector(state => state.quantity.total);
  const [grandTotal,setgrandTotal]=useState(FinalTotal);
  useEffect(()=>{
    setgrandTotal(((FinalTotal*(9/100))*2+5+FinalTotal).toFixed(2));
  },[FinalTotal])
  return (
    <>  
        <div className='flex gap-2 mt-5' style={{widht:"90vw"}}>
            <Division Text={"Shopping Cart"}></Division>
        </div>
        
        <div className='flex  mt-10 gap-5' style={{width:"90vw"}}>
            <div className='w-3/4  border border-solid border-lightgrey'>
              <div className='flex border-b border-solid border-lightgrey justify-around p-5'>
                <div className='font-semibold tracking-tighter '><p>IMAGE</p></div>
                <div className='font-semibold tracking-tighter '><p>IMAGE NAME</p></div>
                <div className='font-semibold tracking-tighter '><p>PRICE</p></div>
                <div className='font-semibold tracking-tighter '><p>QUANTITY</p></div>
                <div className='font-semibold tracking-tighter '><p>FINAL PRICE</p></div>
                <div className='font-semibold tracking-tighter '><p>DISCARD</p></div>
              </div>
              <div>
              {cart.length > 0 ?cart.map((item,index) => <Cartproducts key={index} imageUrl={item.imageUrl} title={item.title} price={item.disPrice} id={item.id}/>): <Cartemptymsg/> }
              </div>
            </div>
            <div className='w-1/4 h-96  border border-solid border-lightgrey'>
                <div className='flex border-b border-solid border-lightgrey justify-around p-5 font-semibold tracking-tighter'>
                  CART TOTAL
                </div>
                <div className='flex justify-between font-semibold tracking-tighter p-5'>
                  <div>SUB TOTAL :</div>
                  <div className='text-mainTheme'>${(FinalTotal).toFixed(2)}</div>
                </div>
                <div className='flex justify-between font-semibold tracking-tighter p-5'>
                  <div>CGST :</div>
                  <div className='text-mainTheme'>${(FinalTotal*(9/100)).toFixed(2)}</div>
                </div>
                <div className='flex justify-between font-semibold tracking-tighter p-5'>
                  <div>SGST :</div>
                  <div className='text-mainTheme'>${(FinalTotal*((9/100))).toFixed(2)}</div>
                </div>
                <div className='flex justify-between font-semibold tracking-tighter p-5'>
                  <div>SHIPPING CHARGES :</div>
                  <div className='text-mainTheme'>${(5).toFixed(2)}</div>
                </div>
                <div className='flex justify-between font-semibold tracking-tighter p-5 border-t border-solid border-lightgrey'>
                  <div>GRAND TOTAL :</div>
                  <div className='text-mainTheme'>${grandTotal}</div>
                </div>
            </div>
        </div>
        
    </>
  )
}
