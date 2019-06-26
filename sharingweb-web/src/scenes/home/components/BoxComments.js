import React from 'react'
import '../css/BoxComments.css'


const BoxComments = (props) => {
  const {image, title, text } = props

  return (
    

    <div className="box-comments-content">
      <img src={image} alt=""></img>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default BoxComments