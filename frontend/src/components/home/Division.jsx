import React from 'react'

export default function Division({Text}) {
  return (
    <div className='mt-5'>
        <p className='text-left font-bold text-2xl p-0 tracking-tighter'>{Text}</p>
        <p
        className="mt-2 h-0.5"
        style={{ width: "90vw", backgroundImage: "linear-gradient(to right ,rgb(120,196,48) 5%, rgba(222, 218, 218, 0.448) 5%)"}}
      ></p>
    </div>
  )
}
