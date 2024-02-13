import React from 'react'

export default function Division({children}) {
  return (
    <div className='mt-5'>
        <p className='text-left font-bold text-2xl p-0 tracking-tighter'>{children}</p>
        <p
        className="mt-2"
        style={{ width: "90vw", border: "1px solid #D9F361"}}
      ></p>
    </div>
  )
}
