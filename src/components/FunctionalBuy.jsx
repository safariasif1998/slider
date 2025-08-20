import React from 'react'

export default function FunctionalBuy({name}) {
  function showAlert(){
    alert(name)
  }
  function handelAlert(){
    setTimeout(showAlert, 2000);
  }
  return (
    <div>
        <span className='buy' onClick={handelAlert}>Buy</span>
        <p>Function</p>
    </div>
  )
}
