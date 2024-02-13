import React from "react";
import image from "../../assets/image.png"

export default function Navbar() {
  return (
    <div className="flex h-16 w-dvw border-rose-500 gap-20 justify-between shadow to-black pr-24 pl-8 z-10" >
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
        <li>fav</li>
        <li>cart</li>
        <li>Icons</li>
      </div>
    </div>
  );
}
