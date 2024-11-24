import React from 'react';
import TeamCard from '../TeamCard.jsx'; // Assuming the TeamCard component is in the same directory

import TeamData from './Team2.json'; // Assuming the JSON file is in the same directory
import TeamCards from '../TeamCards.jsx';

const TeamPage2 = () => {
  return (
    <div className="container  mx-auto" id="team">
    <div className="flex justify-center flex-wrap">        
     {
        TeamData.map((person,index)=>(
         
            <TeamCards key={index} member={person} />
        ))
     }
     </div>
     </div>
  );
};

export default TeamPage2;
