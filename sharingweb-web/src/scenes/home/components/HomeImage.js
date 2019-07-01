import React from 'react'
import '../css/HomeImage.css'
import { MDBBtn } from "mdbreact";

const HomeImage = () => {
  
  return(
    <div className="image-total" id="home">
      <div className="container main-image">
      <div className="main-image-text">
        <h1 className="main-text">Create your Webpage!!</h1>
        <p className="main-text-p">Sharing Web will allow you to create quickly and simple either a linding or an e-commerce web just by interacting with forms</p>
      </div>
      <div className="main-button">
        <MDBBtn href="#" color="default">Log In</MDBBtn>
        <MDBBtn href="https://www.mdbootstrap.com" target="_blank" color="default">Register in Sharing web</MDBBtn>
      </div>
    </div>
    </div>
    
  )
}

export default HomeImage
