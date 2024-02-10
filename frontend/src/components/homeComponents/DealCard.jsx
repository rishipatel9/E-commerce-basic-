import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function DealCard() {

  const [data,setData]=useState(null);
  useEffect(() =>{
    fetchData
  },[])
  const fetchData = async () => {
    try {
      const response = await fetch('https://www.fruityvice.com/api/fruit/all');
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className='mt-5 h-10 w-5 '>

    </div>
  )
}
