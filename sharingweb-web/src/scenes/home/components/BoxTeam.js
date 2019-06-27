import React from 'react'
import '../css/BoxTeam.css'


const BoxTeam = (props) => {
  const {image, title, text } = props

  return (
    

    <div className="box-team-content">
      <img src={image} alt="" className= "rounded-circle"></img>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default BoxTeam