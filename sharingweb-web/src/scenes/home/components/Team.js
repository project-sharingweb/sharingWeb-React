import React from 'react'
import '../css/Team.css'
import BoxTeam from './BoxTeam';
import Guille from '../../../images/guille.jpeg';
import Marta from '../../../images/Marta.png';




const Team = () => {

  return (
    <div id="team" className="team-section" data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="20"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top">
        <div className="container">
          <h2>Our team</h2>
          <div className="team-content pb-5">
            <BoxTeam image={Marta} title="Full stack developer" text="Passionate about nature and social relationships."></BoxTeam>
            <BoxTeam image={Guille} title="Full stack developer" text="Great professional passionate about web programming and basketball"></BoxTeam>
          </div>
        </div>
    </div>
      
  )
}

export default Team


