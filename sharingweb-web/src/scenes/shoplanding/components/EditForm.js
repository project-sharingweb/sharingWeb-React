import React from 'react'
import '../css/EditForm.css'
import {withShopContext} from '../../../contexts/ShopStore'
import ShopService from '../../../services/ShopService'

class EditForm extends React.Component {
  state = {
    shop: this.props.shop
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      shop: {
        ...this.state.shop,
        [name]: value
      }
    }, () => this.props.onShopChange(this.state.shop))
  }

  handleStyleChange = event => {

    const updateShop = style => {
      this.setState({
        shop: {
          ...this.state.shop,
          styles: {
            ...this.state.shop.styles,
            ...style
          }
        }
      }, () => this.props.onShopChange(this.state.shop))
    }

    const { name, value } = event.target
    switch (name) {
      case "titleFont":
      case "navLinks":
      case "footerFont":
        updateShop({[name]: {color: value}});
        break;
      case "nav":
      case "background":
      case "footerBackground":
      case "purchaseButton":
        updateShop({[name]: { backgroundColor: value }});
        break;
      case "landingImage":
        updateShop({[name]: {backgroundImage: value}})
        break;
      default:
        console.error(`Unknown shop style: ${name}`);
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const { shop } = this.state

    ShopService.editShop(shop)
      .then(shop => this.props.updateShop(shop.urlName), error => console.error(error))
  } 


  render() {
    const {edit, onReset} = this.props
    const { shop } = this.state
    return (
      <div className="edit-form-wrapper">
        <div>
          <h1 className="edit-form-main-title">Design your page <i onClick={() => edit()} className="fa fa-times-circle icon-edit-form"></i></h1>
        </div>
        <form onSubmit={this.handleSubmit} className="register-form form-wrapper">
          <div className="form-group">
              <label htmlFor="exampleInputNav">Navbar color</label>
              <input name='nav'
                type="color"
                value={shop.styles.nav.backgroundColor}
                className={`form-control`}
                id="exampleInputNav"
                onChange={this.handleStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputNavLinks">Nav font color</label>
              <input name='navLinks'
                type="color"
                value={shop.styles.navLinks.color}
                className={`form-control`}
                id="exampleInputNavLinks"
                onChange={this.handleStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputTitleColor">Title color</label>
              <input name='titleFont'
                type="color"
                value={shop.styles.titleFont.color}
                className={`form-control`}
                id="exampleInputTitleColor"
                onChange={this.handleStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputLogo">Logo</label>
              <input name='logo'
                type="text"
                value={shop.logo}
                className={`form-control`}
                id="exampleInputLogo"
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputBackGroundImage">Background Image</label>
              <input name='landingImage'
                type="text"
                value={shop.styles.landingImage.backgroundImage}
                className={`form-control`}
                id="exampleInputBackGroundImage"
                onChange={this.handleStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputMoto">Moto</label>
              <input name='moto'
                type="text"
                value={shop.moto}
                className={`form-control`}
                id="exampleInputMoto"
                onChange={this.handleChange}
                placeholder="Type your moto..."/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputBackGround">Background color</label>
              <input name='background'
                type="color"
                value={shop.styles.background.backgroundColor}
                className={`form-control`}
                id="exampleInputBackGround"
                onChange={this.handleStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFooterColor">Footer color</label>
              <input name='footerBackground'
                type="color"
                value={shop.styles.footerBackground.backgroundColor}
                className={`form-control`}
                id="exampleInputFooterColor"
                onChange={this.handleStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFooterFontColor">Footer font color</label>
              <input name='footerFont'
                type="color"
                value={shop.styles.footerFont}
                className={`form-control`}
                id="exampleInputFooterFontColorColor"
                onChange={this.handleStyleChange}/>
            </div>
            <button type="submit" className="btn btn-default">Save</button>
            <button className="btn btn-danger" onClick={(e) =>{ 
              e.preventDefault()
              onReset()}}>Reset</button>
        </form>
      </div>
    )
  }
}

export default withShopContext(EditForm)