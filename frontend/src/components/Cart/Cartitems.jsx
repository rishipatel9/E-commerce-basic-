import React from 'react'
import { useSelector } from 'react-redux';
import Cartemptymsg from './Cartemptymsg';
import Cartproducts from './Cartproducts';

export default function Cartitems() {
  const cart=useSelector(state => state.cart);
  return (
    <>  
        <div className='flex gap-2 mt-10' style={{widht:"90vw"}}>
            <div className='w-1/3 h-10 bg-mainTheme text-white flex justify-center items-center border border-solid border-lightgrey' style={{"clipPath": "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)"
}}>Shopping Cart </div>
            <div className='w-1/3 h-10 bg-white  flex justify-center items-center border border-solid border-lightgrey' style={{"clipPath": "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)"
}}>Check Out</div>
            <div className='w-1/3 h-10 bg-white text-center flex justify-center items-center border border-solid border-lightgrey' style={{"clipPath":" polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)"
}}>Order Completed</div>
        </div>
        <div className='flex  mt-10 gap-5' style={{width:"90vw"}}>
            <div className='w-3/4 h-auto border border-solid border-lightgrey'>
              <div className='flex border-b border-solid border-lightgrey justify-around p-5'>
                <div className='font-semibold tracking-tighter '><p>IMAGE</p></div>
                <div className='font-semibold tracking-tighter '><p>PRODUCT NAME</p></div>
                <div className='font-semibold tracking-tighter '><p>PRICE</p></div>
                <div className='font-semibold tracking-tighter '><p>QUANTITY</p></div>
                <div className='font-semibold tracking-tighter '><p>FINAL PRICE</p></div>
                <div className='font-semibold tracking-tighter '><p>DISCARD</p></div>
              </div>
              <div>
              {cart.length >0 ?cart.map((item,index) => <Cartproducts key={index} imageUrl={item.imageUrl} title={item.title} price={item.disPrice} id={item.id}/>): <Cartemptymsg/> }
              </div>
            </div>
            <div className='w-1/4 border border-solid border-lightgrey'>
                <div className='flex border-b border-solid border-lightgrey justify-around p-5 font-semibold tracking-tighter'>
                  CART TOTAL
                </div>
                
            </div>
        </div>
        
    </>
  )
}
