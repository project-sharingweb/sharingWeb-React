import React from 'react'
import HomeSharingHeader from '../scenes/home/components/HomeSharingHeader'
import Footer from '../scenes/home/components/Footer'

const NotFound = () => {
  
  return (
    <div>
      <HomeSharingHeader/>
      <div className="container main-background">
        <img className="error-image" src="https://cdn.searchenginejournal.com/wp-content/uploads/2017/08/25-Outstanding-404-Page-Examples-You-Have-to-See-760x400.png" alt="not found"/>
      </div>
      <Footer/>
    </div>
  )
}

export default NotFound