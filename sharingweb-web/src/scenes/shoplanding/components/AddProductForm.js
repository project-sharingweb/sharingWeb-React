import React from 'react'
import '../css/AddProductForm.css'
import ShopService from '../../../services/ShopService'
import { withShopContext } from '../../../contexts/ShopStore'


class AddProductForm extends React.Component {
  state = {
    product: {
      shopName: this.props.shop.urlName,
      name: "",
      category: "",
      description: "",
      price: "",
      image: ""
    },
    goMain: false 
  }

  handleChange = e => {
    const {name, value, files} = e.target

    this.setState({
      ...this.state,
      product:{
        ...this.state.product,
        [name]: files && files[0] ? files[0] : value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { product } = this.state

    ShopService.addProduct(product)
      .then(product => {
        this.props.updateShop(product.shopName)
        this.props.add()
      }, error => console.error(error))
  }


  render() {
    const {add} = this.props
    const {product} = this.state
    return(
      <div className="edit-form-wrapper">
        <div>
          <h1 className="edit-form-main-title">Add your products <i onClick={() => add()} className="fa fa-times-circle icon-edit-form"></i></h1>
        </div>
        <form onSubmit={this.handleSubmit} className="register-form form-wrapper">
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input name='name'
              type="text"
              value={product.name}
              className={`form-control`}
              onChange={this.handleChange}
              id="inputName"
              placeholder="Type product name..."/>
          </div>
          <div className="form-group">
            <label htmlFor="inputCategory">Category</label>
            <input name='category'
              type="text"
              value={product.category}
              className={`form-control`}
              onChange={this.handleChange}
              id="inputCategory"
              placeholder="Type the product category..."/>
          </div>
          <div className="form-group">
            <label htmlFor="inputDescription">Product description</label>
            <textarea name='description'
              type="text"
              value={product.description}
              className={`form-control`}
              onChange={this.handleChange}
              id="inputDescription"
              placeholder="Describe your product..."/>
          </div>
          <div className="form-group">
            <label htmlFor="inputPrice">Price</label>
            <input name='price'
              type="number"
              value={product.price}
              className={`form-control`}
              onChange={this.handleChange}
              id="inputPrice"
              placeholder="Type product price..."/>
          </div>
          <div className="form-group">
            <label htmlFor="inputImage">Image</label>
            <input name='image'
              type="file"
              className={`form-control`}
              onChange={this.handleChange}
              id="inputImage"/>
          </div>
          <button className="btn btn-default" type="submit">Create product</button>
        </form>
      </div>
    )
  }


}

export default withShopContext(AddProductForm)