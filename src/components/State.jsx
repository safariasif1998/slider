import React from "react";

export default function State({ state, value, noBorder }) {
  let ClassName = "one-third";
  if (noBorder) {
    ClassName += " no-border";
  }
  return (
    <div className={ClassName}>
      <div className="stat">{state}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}
