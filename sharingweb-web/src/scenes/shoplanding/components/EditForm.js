import React from 'react'
import '../css/EditForm.css'
import {withShopContext} from '../../../contexts/ShopStore'

class EditForm extends React.Component {
  state = {
    shop: {
      moto: this.props.shop.moto,
      styles:{
        nav:{ backgroundColor: this.props.shop.styles.nav.backgroundColor},
//        ladingImage: {backgroundImage: this.props.shop.styles.ladingImage.backgroundImage},
//        background: {backgroundColor: this.props.shop.styles.background.backgroundColor },
//        titleFont: {color: this.props.shop.styles.titleFont.color},
//        purchaseButton: {backgroundColor: this.props.shop.styles.purchaseButton.backgroundColor},
//        footerBackground: {backgroundColor: this.props.shop.styles.footerBackground.backgroundColor},
//        footerFont: {color: this.props.shop.styles.footerFont.color},
      } 
    }
  }


  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      shop: {
        ...this.state.shop,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: false
      }
    })
  }


  render() {
    const {edit} = this.props
    const {shop} = this.state
    return (
      <div className="edit-form-wrapper">
        <div>
          <h1 className="edit-form-main-title">Design your page <i onClick={() => edit()} className="fa fa-times-circle icon-edit-form"></i></h1>
        </div>
        <form onSubmit="" className="register-form form-wrapper">
          <div className="form-group">
              <label htmlFor="exampleInputNav">Navbar color</label>
              <input name='navColor'
                type="color"
                value={shop.navColor}
                className={`form-control`}
                id="exampleInputNav"
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputTitleColor">Title color</label>
              <input name='titleFont'
                type="color"
                value={shop.navColor}
                className={`form-control`}
                id="exampleInputTitleColor"
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputLogo">Logo</label>
              <input name='logo'
                type="file"
                value={shop.logo}
                className={`form-control`}
                id="exampleInputLogo"
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputBackGroundImage">Background Image</label>
              <input name='logo'
                type="file"
                value={shop.backgroundImage}
                className={`form-control`}
                id="exampleInputBackGroundImage"
                onChange={this.handleChange}/>
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
              <input name='Background'
                type="color"
                value={shop.background}
                className={`form-control`}
                id="exampleInputBackGround"
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFooterColor">Footer color</label>
              <input name='footerBackground'
                type="color"
                value={shop.navColor}
                className={`form-control`}
                id="exampleInputFooterColor"
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFooterFontColor">Footer font color</label>
              <input name='footerFont'
                type="color"
                value={shop.navColor}
                className={`form-control`}
                id="exampleInputFooterFontColorColor"
                onChange={this.handleChange}/>
            </div>
            <button className="btn btn-default">Save</button>
            <button className="btn btn-danger">Reset</button>
        </form>
      </div>
    )
  }
}

export default withShopContext(EditForm)