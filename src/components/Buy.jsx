import React from "react";
import FunctionalBuy from "./FunctionalBuy";
import ClassBuy from "./ClassBuy";

export default function Buy({ name }) {
  return (
    <div className="">
      {/* <FunctionalBuy name={name}/>
      <ClassBuy name= {name} /> */}
      <FunctionalBuy />
    </div>
  );
}
