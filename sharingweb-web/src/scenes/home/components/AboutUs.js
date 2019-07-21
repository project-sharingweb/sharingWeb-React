import React from 'react'
import "../css/AboutUs.css"
import BoxAboutUs from './BoxAboutUs';
import landingLogo from '../../../images/landing.png'
import purposeLogo from '../../../images/empresarial profesional.png'
import shopLogo from '../../../images/tienda online.png'
import responsiveLogo from '../../../images/disponible moviles.png' 


const AboutUs = () => {

  return(
    <div id="about-us"  data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="20"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top">
      <div className="container aboutUs-section">
        <h2>The easiest way to create your website</h2>
        <p>You won't need more than 10 minutes to have a beautiful site</p>
        <div className="aboutus-content">
          <BoxAboutUs image={landingLogo} title="Quick landing creation" text="With sharing web you can create and personalize a beautiful landing in 10 minutes"></BoxAboutUs>
          <BoxAboutUs image={purposeLogo} title="Personal or professional" text="You can create your website for professional purposes or personal projects"></BoxAboutUs>
          <BoxAboutUs image={shopLogo} title="Online shop" text="It is really easy to create your own online shop and be able to sell your products to everyone"></BoxAboutUs>
          <BoxAboutUs image={responsiveLogo} title="Suitable for mobile" text="Our designs are fully responsive and will look fantastic in any device"></BoxAboutUs>          
        </div>
      </div>
    </div>
    
  )
}

export default AboutUs