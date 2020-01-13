import React from 'react';
import './card.css';

function Card({id, image, name}) {
  return (
    <div className="card" key={id}>
        <img src={image} alt="picture"/>
        <span className="title">{name}</span>
    </div>
  );
}

export default Card;
