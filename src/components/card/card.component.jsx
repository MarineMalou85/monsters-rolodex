import React from "react";
import "./card.styles.scss";

export const Card = props => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set3&size=180x180`}
        alt={`Monster ${props.monster.name}`}
      />
      <h2 className="card__name">{props.monster.name}</h2>
      <a href={`mailto:${props.monster.email}`} className="card__email">
        {props.monster.email}
      </a>
    </div>
  );
};
