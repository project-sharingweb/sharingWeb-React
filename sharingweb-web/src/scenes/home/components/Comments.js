import React from 'react'
import '../css/comments.css'
import BoxComments from './BoxComments';
import commentsLogo from '../../../images/Comments.png'


const Comments = () => {

  return (
    <div className="comments-section">
        <div className="container">
          <p>This is a comment</p>
          <div className="comments-content">
            <BoxComments image={commentsLogo} title="" text=""></BoxComments>
            <BoxComments image={commentsLogo} title="" text=""></BoxComments>
            <BoxComments image={commentsLogo} title="" text=""></BoxComments>
            <BoxComments image={commentsLogo} title="" text=""></BoxComments>
          </div>
        </div>
    </div>
      
    )
  }

export default Comments