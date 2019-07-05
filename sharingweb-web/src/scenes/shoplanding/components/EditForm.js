import React from 'react'
import '../css/EditForm.css'
import {withShopContext} from '../../../contexts/ShopStore'

class EditForm extends React.Component {


  render() {
    const {edit, shop, onStyleChange, onChange, onReset} = this.props
    return (
      <div className="edit-form-wrapper">
        <div>
          <h1 className="edit-form-main-title">Design your page <i onClick={() => edit()} className="fa fa-times-circle icon-edit-form"></i></h1>
        </div>
        <form onSubmit="" className="register-form form-wrapper">
          <div className="form-group">
              <label htmlFor="exampleInputNav">Navbar color</label>
              <input name='nav'
                type="color"
                value={shop.styles.nav}
                className={`form-control`}
                id="exampleInputNav"
                onChange={onStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputTitleColor">Title color</label>
              <input name='titleFont'
                type="color"
                value={shop.styles.titleFont}
                className={`form-control`}
                id="exampleInputTitleColor"
                onChange={onStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputLogo">Logo</label>
              <input name='logo'
                type="file"
                value={shop.logo}
                className={`form-control`}
                id="exampleInputLogo"
                onChange={onStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputBackGroundImage">Background Image</label>
              <input name='logo'
                type="file"
                value={shop.backgroundImage}
                className={`form-control`}
                id="exampleInputBackGroundImage"
                onChange={onStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputMoto">Moto</label>
              <input name='moto'
                type="text"
                value={shop.moto}
                className={`form-control`}
                id="exampleInputMoto"
                onChange={onChange}
                placeholder="Type your moto..."/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputBackGround">Background color</label>
              <input name='background'
                type="color"
                value={shop.styles.background}
                className={`form-control`}
                id="exampleInputBackGround"
                onChange={onStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFooterColor">Footer color</label>
              <input name='footerBackground'
                type="color"
                value={shop.styles.footerBackground}
                className={`form-control`}
                id="exampleInputFooterColor"
                onChange={onStyleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFooterFontColor">Footer font color</label>
              <input name='footerFont'
                type="color"
                value={shop.styles.footerFont}
                className={`form-control`}
                id="exampleInputFooterFontColorColor"
                onChange={onStyleChange}/>
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