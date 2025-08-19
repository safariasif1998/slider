import React from "react";

export default function Slider() {
  return (
    <div className="slide-container">
      <div className="wrapper">
        <div className="arrow-wrapper">
          <div className="round">
            <div id="cta">
              <span className={`arrow next`}></span>
            </div>
          </div>
        </div>
        <div className="clash-card barbarian">
          <div className={`clash-card__image clash-card__image--barbarian`}>
            <img src="" alt="" />
          </div>
          <div className="clash-card__level clash-card__level--barbarian">
            Level 4
          </div>
          <div className="clash-card__level clash-card__level--barbarian">
            Level 4
          </div>
          <div className="clash-card__unit-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            nostrum.
          </div>
          <div
            className={`clash-card__unit-stats clash-card__unit-stats--barbarian clearfix`}
          >
            <div className={"one-third"}>
              <div className="stat">{20}</div>
              <div className="stat-value">{"training"}</div>
            </div>
            <div className={"one-third"}>
              <div className="stat">{16}</div>
              <div className="stat-value">{"speed"}</div>
            </div>
            <div className={"one-third"}>
              <div className="stat">{150}</div>
              <div className="stat-value">{"cost"}</div>
            </div>
          </div>
        </div>
        <div className="arrow-wrapper">
          <div className="round">
            <div id="cta">
              <span className={`arrow prev`}></span>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
