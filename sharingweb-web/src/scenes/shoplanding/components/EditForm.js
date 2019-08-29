import React from 'react'
import '../css/EditForm.css'
import {withShopContext} from '../../../contexts/ShopStore'
import ShopService from '../../../services/ShopService'

class EditForm extends React.Component {
  state = {
    shop: this.props.shop,
    background: ""
  }

  handleChange = event => {
    const { name, value, files } = event.target;

    this.setState({
      ...this.state,
      shop: {
        ...this.state.shop,
        [name]: files && files[0] ? files[0] : value
      }
    }, () => this.props.onShopChange(this.state.shop))
  }

  handleStyleChange = event => {

    const updateShop = (style, val) => {
      this.setState({
        shop: {
          ...this.state.shop,
          styles: {
            ...this.state.shop.styles,
            ...style
          }
        },
        background: val
      }, () => this.props.onShopChange(this.state.shop))
    }

    const { name, value, files } = event.target
    switch (name) {
      case "titleFont":
      case "navLinks":
      case "footerFont":
      case "text":
      case "motoColor":
        updateShop({[name]: {color: value}}, "");
        break;
      case "nav":
      case "background":
      case "footerBackground":
      case "purchaseButton":
        updateShop({[name]: { backgroundColor: value }}, "");
        break;
      case "landingImage":
        updateShop({[name]: {backgroundImage: files && files[0] ? files[0] : value}}, files && files[0] ? files[0] : value)
        break;
      default:
        console.error(`Unknown shop style: ${name}`);
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const { shop, background } = this.state

    ShopService.editShop(shop, background)
      .then(shop => this.props.updateShop(shop.urlName), error => console.error(error))
  }
  
  handleSubmit2 = event => {
    event.preventDefault()
    const { shop, background } = this.state

    ShopService.editShop(shop, background)
      .then(shop => this.props.updateShop(shop.urlName), error => console.error(error))
  }


  render() {
    const {modify, onReset} = this.props
    const { shop, background } = this.state
    return (
      <div className="edit-form-wrapper">
        <div>
          <h1 className="edit-form-main-title">Design your page <i onClick={() => modify("edit")} className="fa fa-times-circle icon-edit-form"></i></h1>
        </div>
        <form onSubmit={this.handleSubmit} className="register-form form-wrapper">
          <div className="form-group">
              <label htmlFor="Nav">Navbar color</label>
              <input name='nav'
                type="color"
                value={shop.styles.nav.backgroundColor}
                className={`form-control`}
                id="Nav"
                onChange={this.handleStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="NavLinks">Nav font color</label>
              <input name='navLinks'
                type="color"
                value={shop.styles.navLinks.color}
                className={`form-control`}
                id="NavLinks"
                onChange={this.handleStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="TitleColor">Title color</label>
              <input name='titleFont'
                type="color"
                value={shop.styles.titleFont.color}
                className={`form-control`}
                id="TitleColor"
                onChange={this.handleStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="MotoColor">Moto color</label>
              <input name='motoColor'
                type="color"
                value={shop.styles.motoColor.color}
                className={`form-control`}
                id="MotoColor"
                onChange={this.handleStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="Text">Text color</label>
              <input name='text'
                type="color"
                value={shop.styles.text.color}
                className={`form-control`}
                id="Text"
                onChange={this.handleStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="Moto">Moto</label>
              <input name='moto'
                type="text"
                value={shop.moto}
                className={`form-control`}
                id="Moto"
                onChange={this.handleChange}
                placeholder="Type your moto..."/>
            </div>
            <div className="form-group">
              <label htmlFor="BackGround">Background color</label>
              <input name='background'
                type="color"
                value={shop.styles.background.backgroundColor}
                className={`form-control`}
                id="BackGround"
                onChange={this.handleStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="FooterColor">Footer color</label>
              <input name='footerBackground'
                type="color"
                value={shop.styles.footerBackground.backgroundColor}
                className={`form-control`}
                id="FooterColor"
                onChange={this.handleStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="FooterFontColor">Footer font color</label>
              <input name='footerFont'
                type="color"
                value={shop.styles.footerFont.color}
                className={`form-control`}
                id="FooterFontColorColor"
                onChange={this.handleStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="Currency">Currency</label>
              <select name='currency'
                type="select"
                value={shop.currency}
                className={`form-control`}
                id="currency"
                onChange={this.handleChange}>
              <option  value="EUR">EUR</option>
              <option  value="USD">USD</option>
              </select>
            </div>
            <button type="submit" className="btn btn-default">Save</button>
            <button className="btn btn-danger" onClick={(e) =>{ 
              e.preventDefault()
              onReset()}}>Reset</button>
        </form>
        <form onSubmit={this.handleSubmit2} className="register-form form-wrapper">
          <div className="form-group">
            <label htmlFor="Logo">Logo</label>
            <input name='logo'
              type="file"
              className={`form-control`}
              id="logo"
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="BackGroundImage">Background Image</label>
            <input name='landingImage'
              type="file"
              className={`form-control`}
              id="BackGroundImage"
              onChange={this.handleStyleChange}/>
          </div>
          <button type="submit" className={background === "" ?  "btn btn-default disabled":"btn btn-default"}>Save</button>
        </form>
      </div>
    )
  }
}

export default withShopContext(EditForm)