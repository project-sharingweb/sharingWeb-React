import React from 'react'
import LandingHeader from './LandingHeader'



const AboutUs = props => {
  const {data } = props
  return (
    <div>
      <LandingHeader data={data}></LandingHeader>
      <div className="container">{data.aboutUs}</div>
    </div>
  )
}

export default AboutUs