import React from 'react'
import HomeSharingHeader from './components/HomeSharingHeader'
import HomeImage from './components/HomeImage'
import './css/Home.css'
import AboutUs from './components/AboutUs';
import Examples from './components/Examples';




const Home = () => {

  return (
    <div>
      <div className="first-section">
        <HomeSharingHeader></HomeSharingHeader>
        <HomeImage></HomeImage>
      </div>
      <AboutUs></AboutUs>
      <Examples></Examples>
      
    </div>
  )
}

export default Home