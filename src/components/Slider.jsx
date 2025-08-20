import React, { useState, useEffect } from "react";
import Arrow from "./Arrow";
import CardItem from "./CardItem";
import UnitStates from "./UnitStates";
import Card from "./Card";

export default function Slider() {
  const [heroes, setHeroes] = useState([]);
  const [courser, setCourser] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/heroes")
      .then((response) => response.json())
      .then((heroes) => setHeroes(heroes));
  }, []);

  function handelPrevItem() {
    const current = courser - 1 < 0 ? heroes.length - 1 : courser - 1;
    setCourser(current);
  }
  function handelNextItem() {
    const current = courser + 1 < heroes.length ? courser + 1 : 0;
    setCourser(current);
  }
  return (
    <div className="slide-container">
      <div className="wrapper">
        {!heroes.length ? (
          <div>Loading......</div>
        ) : (
          <>
            <Arrow direction={"prev"} handelClick={handelPrevItem} />
            <div className="clash-card barbarian">
              <Card hero={heroes[courser]} />
            </div>
            <Arrow direction={"next"} handelClick={handelNextItem} />
          </>
        )}
      </div>
      ;
    </div>
  );
}
