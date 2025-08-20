import React, { Children } from "react";

export default function CardItem({type, children}) {
  return (
    <div>
      <div className={type}>
        {children}
      </div>
    </div>
  );
}
