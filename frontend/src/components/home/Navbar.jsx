import React from "react";
import image from "../../assets/image.png"
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const history=useNavigate();
  const handleClick= () =>{
    history('/Cart')
  }
  return (
    <div className="xl:flex xl:h-16 xl:w-dvw xl:border-rose-500 xl:gap-20 xl:justify-between xl:shadow xl:to-black xl:pr-24 xl:pl-8 " >
      <div className="flex justify-center items-center">
        <img className="h-24" src={image} alt="" />
      </div>
      <div className="flex h-8 justify-between gap-5 items-center border-slate-500 self-center border-solid pl-1 border-black" style={{"border":"1px solid #E4E4E4"}} >
        <div>
          <input type="text outline-none " className="h-5 outline-none" />
        </div>
        <div className="bg-mainTheme h-full w-ful px-2 pt-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.8}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
      <div className="xl:hidden sm:">hello</div>
      <div className="flex gap-10 justify-center items-center list-none  ">
        <li>
          <a className="font-semi text-lg text-black"  href="">Home</a>
        </li>
        <li>
          <a className="font-semi text-lg text-black"  href="">Shop</a>
        </li>
        <li>
          <a className="font-semi text-lg text-black"  href="">Products</a>
        </li>
        <li>
          <a className="font-semi text-lg text-black"  href="">About</a>
        </li>
      </div>
      <div className="flex gap-10 justify-center items-center list-none">
        <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg></li>
        <li ><svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg></li>
<li>Price</li>
      </div>
    </div>
  );
}
