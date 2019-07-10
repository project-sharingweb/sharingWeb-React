import React from 'react'
import '../css/HomeImage.css'

const HomeImage = props => {
  
  return(
    <div className="container-demo">
      <div className="container-img">
        <img alt="landing page pic" src='http://placehold.it/300x300'/>

      </div>
      <div className="container-content">
        <h1 className="main-text">Create your Webpage!!</h1>
        <p className="main-text-p">Sharing Web will allow you to create quickly and simple either a linding or an e-commerce web just by interacting with forms</p>
        <div className="main-button">
          <button className="btn btn-default" onClick={() => props.login()}>Log In</button>
          <button className="btn btn-default" onClick={() => props.register()}>Register in Sharing web</button>
        </div>
      </div>

    </div>
    
  )
}

export default HomeImage
