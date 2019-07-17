import React from 'react'
import LandingHeader from './LandingHeader'
import { withShopContext } from '../../../contexts/ShopStore'
import LandingFooter from './LandingFooter';
import '../css/AboutUs.css'
import {WithAuthContext} from '../../../contexts/AuthStore'
import AboutUsForm from './AboutUsForm'



class AboutUs extends React.Component {
  state = {
    edit: false,
    shop: this.props.shop
  }

  modifyEdit = () => {
    const {edit} = this.state
    edit ? this.setState({ ...this.state, edit: false}) : this.setState({...this.state, edit: true})
  }
  
  render() {
    const {shop, isAuthenticated} = this.props
    const {edit} = this.state
    return (
      <React.Fragment>
        {shop &&
        <div style={shop.styles.background} className="main-background">
          <LandingHeader></LandingHeader>
          <div className="about-us-wrapper mt-5 pb-5">        
            {edit && <AboutUsForm edit={this.modifyEdit}></AboutUsForm>}
            

            <div className="container">
              <h1 className="about-us-title">About us</h1>
              <p className="about-us-text">{shop.aboutUs}</p>  
              {isAuthenticated() && <div className="edit-aboutus-button-wrapper"><button className="btn btn-default" onClick={() => this.modifyEdit()}>edit</button></div>}       
            </div>


            <LandingFooter></LandingFooter>
          </div>
        </div>}
      </React.Fragment>
      

    )
  }
}

export default WithAuthContext(withShopContext(AboutUs))