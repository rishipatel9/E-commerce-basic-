import React from 'react'
import DEAL_DATA from '../../../data/dealData';
import DealCard from './DealCard.jsx';

export default function () {

  return (
    <div  className="grid grid-flow-col gap-5 overflow-x-auto" style={{"width": "90vw"}}>
     {DEAL_DATA.map((data,index) => <DealCard key={index} title={data.title} imageUrl={data.imageUrl} price={data.price} />)}
    </div>
  )
}
  