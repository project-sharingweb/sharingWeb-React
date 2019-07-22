import React from 'react'
import '../css/comments.css'
import BoxComments from './BoxComments';
import commentsLogo from '../../../images/david.png';
import commentsLogo1 from '../../../images/abel.png';
import commentsLogo2 from '../../../images/eva.png';
import commentsLogo3 from '../../../images/juan.png';

const Comments = () => {

  return (
    <div id="comments" className="comments-section" data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="20"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top">
        <div className="container">
          <h2>Our users word</h2>
          <div className="comments-content">
            <BoxComments image={commentsLogo} title="David Gallego" text="I'm very happy with the result of my landing created with sharing web."></BoxComments>
            <BoxComments image={commentsLogo1} title="Abel Fernandez" text="Sharing web is the best quality-price option to create your online shop."></BoxComments>
            <BoxComments image={commentsLogo2} title="Eva Francés" text="Since I learned about web sharing, I am no longer afraid of editing my landing page."></BoxComments>
            <BoxComments image={commentsLogo3} title="Juan PG" text="Sharing web is a perfect page to create your online shop in less than 30 minutes."></BoxComments>
          </div>
        </div>
    </div>
  )
}
export default Comments