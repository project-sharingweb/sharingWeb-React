import React from 'react'
import LandingHeader from './LandingHeader'
import { withShopContext } from '../../../contexts/ShopStore'
import LandingFooter from './LandingFooter';




const Orders = props => {


  return (
    <div>
      <LandingHeader></LandingHeader>
      <LandingFooter></LandingFooter>
    </div>
    

  )
}

export default withShopContext(Orders)