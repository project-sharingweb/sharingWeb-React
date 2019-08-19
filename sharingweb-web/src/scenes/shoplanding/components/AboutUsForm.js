import React from 'react'
import { withShopContext } from '../../../contexts/ShopStore'
import '../css/AboutUsForm.css'
import ShopService from '../../../services/ShopService'


class AboutUsForm extends React.Component {
  state = {
    shop: this.props.shop
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      shop: {
        ...this.state.shop,
        [name]: value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { shop } = this.state

    ShopService.editShop(shop, "")
      .then(shop => {
        this.props.updateShop(shop.urlName)
        this.props.edit()
      }, error => console.error(error))
  }


  render(){
    const {shop} = this.state
    
    return(
      <div className="about-us-register-background about-us-register-background-mobile" data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="20"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top">
          <div className="register-component">
            <i onClick={() => this.props.edit()} className="fa fa-times-circle close-button"></i>
            <h1>About Us</h1>
            <form onSubmit={this.handleSubmit} className="register-form">
              <div className="form-group">
                <label className="aboutus-label" htmlFor="exampleInputAboutUS">About us</label>
                <textarea name='aboutUs'
                  rows="14"
                  type="text"
                  value={shop.aboutUs}
                  className='form-control mt-3 mb-3'
                  id="exampleInputAboutUS"
                  onChange={this.handleChange}
                  placeholder="Enter your about us"/>
              </div>
              <button type="submit" className="btn btn-primary mt-3">Save</button>
            </form>
          </div>
      </div>
    )
  }
}

export default withShopContext(AboutUsForm)