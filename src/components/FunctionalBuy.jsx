import React from "react";
import { useState } from "react";
export default function FunctionalBuy() {
  const [count, setCount] = useState(0);
  /* function showAlert() {
    alert(name);
  } */
  /* function handelAlert() {
    setTimeout(showAlert, 2000);
  } */
  function Increment() {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);
    console.log(count);
  }
  function Decrement() {
    if (count > 0) {
      setTimeout(() => {
        setCount((PrevCount) => PrevCount - 1);
      }, 2000);
    }
  }
  return (
    <div className="buy-container">
      {/*  <span className='buy' onClick={handelAlert}>Buy</span>
        <p>Function</p> */}
      <div className="counters-btn">
        <button className="minus" onClick={Decrement}>
          -
        </button>
        <span className="count">{count}</span>
        <button className="plus" onClick={Increment}>
          +
        </button>
      </div>
      <span className="buy">Buy</span>
    </div>
  );
}
