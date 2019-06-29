import React from 'react'
import '../css/Team.css'
import BoxTeam from './BoxTeam';
import Guille from '../../../images/guille.jpeg';
import Marta from '../../../images/Marta.png';




const Team = () => {

  return (
    <div id="team" className="team-section">
        <div className="container">
          <h2>Our team</h2>
          <div className="team-content">
            <BoxTeam image={Marta} title="Full stack developer" text="Passionate about nature, diversity and social relationships."></BoxTeam>
            <BoxTeam image={Guille} title="Full stack developer" text="Great professional with web programming and basketball"></BoxTeam>
          </div>
        </div>
    </div>
      
  )
}

export default Team


