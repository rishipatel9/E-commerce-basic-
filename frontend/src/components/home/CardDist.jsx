import React from 'react'
import DEAL_DATA from '../../../data/dealData';
import DealCard from './DealCard.jsx';

export default function () {

  return (
    <div  className="flex gap-5">
     {DEAL_DATA.map((data,index) => <DealCard key={index} title={data.title} imageUrl={data.imageUrl} price={data.price} />)}
    </div>
  )
}
