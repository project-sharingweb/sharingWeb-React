import React from 'react'
import '../css/HomeImage.css'
import fotico from '../../../images/background.jpg'

const HomeImage = props => {
  
  return(
    <div className="home-image-wrapper">
      <div className="container container-demo">
      <div className="container-img">
        <img className="image-background-home" alt="landing page pic" src={fotico}/>

      </div>
      <div className="container-content">
        <h1 className="main-text">Create your Webpage!!</h1>
        <p className="main-text-p">Sharing Web will allow you to create quickly and simple an e-commerce web just by interacting with forms</p>
        <div className="main-button">
          <button className="btn btn-default" onClick={() => props.login()}>Log In</button>
          <button className="btn btn-default" onClick={() => props.register()}>Register in Sharing web</button>
        </div>
      </div>
      </div>
    </div>
    
  )
}

export default HomeImage
