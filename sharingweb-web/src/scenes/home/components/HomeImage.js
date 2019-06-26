import React from 'react'
import '../css/HomeImage.css'

const HomeImage = () => {
  
  return(
    <div className="container main-image">
      <div className="main-image-text">
        <h1 className="main-text">Create your Webpage!!</h1>
        <p className="main-text-p">Sharing Web will allow you to create quickly and simple either a linding or an e-commerce web just by interacting with forms</p>
      </div>
      <img className="main-image-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUuGeBtTXZqX0rD_dlAf6qdxlHWlk5nE0vbnH3T2bZw0f98Xp_" alt=""></img>
    </div>
  )
}

export default HomeImage