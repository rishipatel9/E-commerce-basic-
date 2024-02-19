import React from "react";
import { useDispatch } from 'react-redux';
import { add } from "../../utility/cart";

export default function DealCard({ title, imageUrl, price }) {
  const discount = Math.floor(Math.random() * 50);
  const discountedPrice = price - (price * discount) / 100;

  const randomNum= Math.floor(Math.random() * 80);
  const style={
    width:"90%",
    backgroundImage:`linear-gradient(to right , rgb(120,196,48) ${randomNum}%, rgba(222, 218, 218, 0.448) ${randomNum}%)`
  }
  const dispatch=useDispatch();
  const addtocartHandler =() =>{

     dispatch(add(
      {
        title:title,
        imageUrl:imageUrl,
        disPrice:discountedPrice,
      }
     ))
  } 

  return (
    <div className="mt-5 h-auto w-52 flex flex-col justify-center relative items-center border border-solid border-lightgrey transition-all hover:border-mainTheme hover:shadow-xl">
      <div className="absolute top-2 left-1 bg-mainTheme text-white px-1 shadow-sm rounded-sm font-light">
        {discount}%
      </div>
      <div>
        <img
          src={imageUrl}
          className="h-28 w-28 mt-10 mb-10 my-10 "
          alt={title}
        />
      </div>
      <div className="bg-mainTheme px-1 m-2 shadow-md w-full text-center text-white font-light">
        Sale
      </div>
      <p className="text-xl font-bold tracking-tighter p-0">{title}</p>
      <div className="flex mx-5">
        <p className="text-xl tracking-tighter font-semibold">
          ${discountedPrice}
        </p>
        <strike className="font-light mt-1 ml-1 text-lighttext">
          ${price}
        </strike>
      </div>
      <div className="flex justify-center items-center gap-5 mt-2">
        <div className="h-10 w-10 bg-lightgrey rounded-3xl flex justify-center items-center" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="rgb(120,196,48)"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
      {/* Cart  */}
        <div className="h-10 w-10 bg-lightgrey rounded-3xl flex justify-center items-center " onClick={() => addtocartHandler()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="rgb(120,196,48)"
            className="w-6 h-6"
            
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center gap-5 m-2 items-center">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#F0B21D"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#F0B21D"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#F0B21D"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#F0B21D"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="rgba(222, 218, 218, 0.448)"
            className="w-4 h-4 "
          >
            <path
              fillRule="evenodd"
              d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="h-1 m-2 " style={style}></div>
      <p className="text- font-semibold tracking-tighter" >Sold :{randomNum}</p>
    </div>
  );
}
