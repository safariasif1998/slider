import React from "react";

// 📌 Arrow Component
// Props:
// - direction: string ("prev" or "next") → used as a CSS class to style the arrow
// - handelClick: function → callback triggered when arrow is clicked
export default function Arrow({ direction, handelClick }) {
  return (
    <div className="arrow-wrapper">
      <div className="round">
        <div id="cta">
          {/* 
            📌 The <span> acts as the clickable arrow.
            - It receives a dynamic className: "arrow prev" OR "arrow next"
            - onClick triggers the handler passed down from Slider.jsx
          */}
          <span className={`arrow ${direction}`} onClick={handelClick}></span>
        </div>
      </div>
    </div>
  );
}
