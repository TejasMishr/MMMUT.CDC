import React from 'react';
import TeamCard from '../TeamCard.jsx';

import TeamData from './Team1.json'; 
import TeamCards from '../TeamCards.jsx';

const TeamPage1 = () => {
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

export default TeamPage1;
