import React, { useState, useEffect } from "react";

// 📌 Import child components used inside the slider
import Arrow from "./Arrow";          // Navigation arrows (next/previous)
import CardItem from "./CardItem";    // Likely used to render details of a hero (not used directly here)
import UnitStates from "./UnitStates";// Example component for state (not used directly here)
import Card from "./Card";            // Component that displays a single hero card

// 📌 Slider Component
export default function Slider() {
  // State to hold the list of heroes (fetched from API/db.json)
  const [heroes, setHeroes] = useState([]);

  // State to keep track of the current index (which hero is being shown)
  const [courser, setCourser] = useState(0);

  // 📌 Fetch heroes data once when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/heroes") // Mock API endpoint (via db.json + json-server)
      .then((response) => response.json())
      .then((heroes) => setHeroes(heroes));
  }, []); // Empty dependency array → runs only once at mount

  // 📌 Go to the previous hero
  function handelPrevItem() {
    const current = courser - 1 < 0 ? heroes.length - 1 : courser - 1;
    setCourser(current);
  }

  // 📌 Go to the next hero
  function handelNextItem() {
    const current = courser + 1 < heroes.length ? courser + 1 : 0;
    setCourser(current);
  }

  // 📌 Render section
  return (
    <div className="slide-container">
      <div className="wrapper">
        {/* If heroes array is empty → show loading message */}
        {!heroes.length ? (
          <div>Loading......</div>
        ) : (
          <>
            {/* Previous arrow button */}
            <Arrow direction={"prev"} handelClick={handelPrevItem} />

            {/* Display current hero card */}
            <div className="clash-card barbarian">
              <Card hero={heroes[courser]} />
            </div>

            {/* Next arrow button */}
            <Arrow direction={"next"} handelClick={handelNextItem} />
          </>
        )}
      </div>
    </div>
  );
}
