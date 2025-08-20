import React from "react";
import FunctionalBuy from "./FunctionalBuy";
import ClassBuy from "./ClassBuy";

export default function Buy({name}) {
  return (
    <div className="buy-container">
      <FunctionalBuy name={name}/>
      <ClassBuy name= {name} />
    </div>
  );
}
