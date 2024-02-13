import React from 'react'


export default function DealCard({title,imageUrl,price}) {
  
  return (
    <div className='mt-5 h-96 w-52 border-2 border-solid border-mainTheme flex flex-col justify-center items-center'>
      <img src={imageUrl} alt={title} />
      <h1>{title}</h1>
      <h3>{price}</h3>
    </div>
  )
}
