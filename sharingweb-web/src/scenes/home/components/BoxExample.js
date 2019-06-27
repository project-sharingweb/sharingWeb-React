import React from 'react'
import '../css/BoxExample.css'


const BoxExample = (props) => {
  const {image, title, text } = props

  return (
    

    <div className="box-example-content">
      <img src={image} alt=""></img>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default BoxExample