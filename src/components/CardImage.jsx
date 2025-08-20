import React from "react";

export default function CardImage({img, name}) {
  return (
    <div className={`clash-card__image clash-card__image--barbarian`}>
      <img src={img} alt={name} />
    </div>
  );
}
