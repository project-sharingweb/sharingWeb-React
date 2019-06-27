import React from 'react'
import '../css/comments.css'
import BoxComments from './BoxComments';
import commentsLogo from '../../../images/Comments.png'


const Comments = () => {

  return (
    <div className="comments-section">
        <div className="container">
          <h2>Here you can find the comments of our users</h2>
          <p>This is a comment</p>
          <div className="comments-content">
            <BoxComments image={commentsLogo} title="Comment 1" text="I'm very happy with sharing web"></BoxComments>
            <BoxComments image={commentsLogo} title="Comment 2" text="I'm very happy with sharing web"></BoxComments>
            <BoxComments image={commentsLogo} title="Comment 3" text="I'm very happy with sharing web"></BoxComments>
            <BoxComments image={commentsLogo} title="Comment 4" text="I'm very happy with sharing web"></BoxComments>
          </div>
        </div>
    </div>
      
    )
  }

export default Comments