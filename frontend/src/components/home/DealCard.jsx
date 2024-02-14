import React from "react";

export default function DealCard({ title, imageUrl, price }) {
  return (
    <div
      // style={{
      //   border: "1px solid rgba(222, 218, 218, 0.448)",
      //   "box-shadow": "5px 5px 15px rgba(228, 224, 224, 0.404)",
      // }}
      className="mt-5 h-auto w-52 flex flex-col justify-center relative items-center border-2 border-solid border-lightgrey transition-all hover:border-mainTheme hover:shadow-xl"
    >
      <div className="absolute top-2 left-1 bg-mainTheme text-white px-1">-35%</div>
      <div>
        <img src={imageUrl} className="h-28 w-28 mt-10 mb-10 my-10" alt={title} />
      </div>

      <p>{title}</p>
      <h3>{price}</h3>
    </div>
  );
}
