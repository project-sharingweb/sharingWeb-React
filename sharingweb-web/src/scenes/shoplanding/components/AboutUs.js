import React from 'react'
import LandingHeader from './LandingHeader'
import { withShopContext } from '../../../contexts/ShopStore'



const AboutUs = props => {


  return (
    <div>
      <LandingHeader></LandingHeader>
      <div className="container">{props.aboutUs}</div>
    </div>
  )
}

export default withShopContext(AboutUs)