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
    if (shop) document.title = shop.name
    if (shop) document.getElementById("ico").setAttribute("href", shop.logo)
    return (
      <React.Fragment>
        {shop &&
        <React.Fragment>
        {edit && <AboutUsForm edit={this.modifyEdit}></AboutUsForm>}
        <div style={shop.styles.background} className={edit ? "main-background hide-me":"main-background"}>
          <LandingHeader></LandingHeader>
          <div className="about-us-wrapper mt-5 pb-5">        
            

            <div className="container">
              <h1 style={shop.styles.text} className="about-us-title">About us</h1>
              <p style={shop.styles.text} className="about-us-text">{shop.aboutUs}</p>  
              {(isAuthenticated() && this.props.shopUser.name === shop.name )&& <div className="edit-aboutus-button-wrapper"><button className="btn btn-default" onClick={() => this.modifyEdit()}>edit</button></div>}       
            </div>


            <LandingFooter></LandingFooter>
          </div>

        </div>
        </React.Fragment>}
      </React.Fragment>
      

    )
  }
}

export default WithAuthContext(withShopContext(AboutUs))