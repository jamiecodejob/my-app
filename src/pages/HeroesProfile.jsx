import React from 'react';
import './heroesProfile.css';
import Card from '../component/Card.jsx';
import BarArea from '../component/BarArea.jsx'

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

const profileData = [{
  str: 2,
  int: 7,
  agi: 9,
  luk: 7
}]

function HeroesProfile() {
  return (
    <div className="hero-profile">
      <div className="hero-profile-list">
        {
          data.map((item, index) => (
            <Card key={index} id={item.id} image={item.image} name={item.name} />
          ))
        }
        {
            profileData.map(item => {
                return (
                    <div className="profile">
                        <BarArea str={item.str} int={item.int} agi={item.agi} luk={item.luk}/>
                        <div className="saveArea">
                            <div>剩餘點數: <span>0</span></div>
                            <div className="save">儲存</div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
}

export default HeroesProfile;