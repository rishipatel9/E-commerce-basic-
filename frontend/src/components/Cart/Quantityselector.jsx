import React, { useState } from 'react';

function Quantityselector({onCountChange}) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
    onCountChange(prevCount+1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
    onCountChange(prevCount-1);
  };
  return (
    <div className="flex justify-center items-center select-none border border-solid border-lightgrey p-1">
      <span className="hover:text-mainTheme" onClick={decrement}>-</span>
      <span className=" mx-2 px-2" style={{borderLeft:"1px solid rgba(0,0,0,0.2)",borderRight:"1px solid rgba(0,0,0,0.2)"}} onChange> {`${count}`} </span>
      <span className="hover:text-mainTheme" onClick={increment}>+</span>
    </div>
  );
}
export default Quantityselector;
