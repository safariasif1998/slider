import React from "react";
import CardItem from "./CardItem";
import CardImage from "./CardImage";
import UnitStates from "./UnitStates";
import Buy from "./Buy";
export default function Card({ hero }) {
  return (
    <div>
      <CardImage img={hero.img} name={hero.name} />
      <CardItem type="clash-card__level clash-card__level--barbarian">
        {hero.level}
      </CardItem>
      <CardItem type="clash-card__unit-name">{hero.name}</CardItem>
      <CardItem type="clash-card__unit-description">
        {hero.description}
      </CardItem>
      <Buy name ={hero.name}/>
      <UnitStates units={hero.units} name={hero.name} />
    </div>
  );
}
