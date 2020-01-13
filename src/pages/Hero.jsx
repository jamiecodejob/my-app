import React from 'react';
import './hero.css';
import Card from '../component/Card.jsx';

const data = [
  {
      id: "1",
      name: "Daredevil",
      image: "http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg"
  },
  {
      id: "2",
      name: "Thor",
      image: "http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg"
  },
];

function Hero() {
  return (
    <div className="hero">
      <div className="hero-list">
        {
          data.map((item, index) => (
            <Card key={index} id={item.id} image={item.image} name={item.name} />
          ))
        }
      </div>
    </div>
  );
}

export default Hero;
