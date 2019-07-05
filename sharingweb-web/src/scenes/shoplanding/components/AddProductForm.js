import React from 'react'
import '../css/AddProductForm.css'
import ShopService from '../../../services/ShopService'


class AddProductForm extends React.Component {
  state = {
    product: {
      name: ""
    }
  }


  render() {
    const {add} = this.props
    const {product} = this.state
    return(
      <div className="edit-form-wrapper">
        <div>
          <h1 className="edit-form-main-title">Design your page <i onClick={() => add()} className="fa fa-times-circle icon-edit-form"></i></h1>
        </div>
        <form onSubmit="" className="register-form form-wrapper">
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input name='name'
              type="text"
              value={product.name}
              className={`form-control`}
              id="inputName"
              placeholder="Type product name..."/>
          </div>
        </form>
      </div>
    )
  }


}

export default AddProductForm