import React from 'react'
import '../css/BoxAboutUs.css'


const BoxAboutUs = (props) => {
  const {image, title, text } = props

  return (
    

    <div className="box-aboutus-content">
      <img src={image} alt=""></img>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default BoxAboutUs