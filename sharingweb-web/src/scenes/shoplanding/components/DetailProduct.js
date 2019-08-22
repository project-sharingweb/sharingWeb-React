import React from 'react'
import LandingHeader from '../components/LandingHeader'
import {withShopContext} from '../../../contexts/ShopStore'
import {WithAuthContext} from '../../../contexts/AuthStore'
import LandingFooter from './LandingFooter'
import "../css/DetailProduct.css"
import EditProductForm from './EditProductForm'
import {Redirect} from 'react-router-dom'




class DetailProducts extends React.Component {

  state = {
    edit: false,
    size: null,
    goCart: false
  }

  modifyEdit = () => {
    const {edit} = this.state
    edit ? this.setState({ ...this.state, edit: false}) : this.setState({...this.state, edit: true})
  }

  handleChange = e => {
    const {value} = e.target
    this.setState({
      ...this.state,
      size: value
    })
  }

  addingToCart = (product) => {
    product.ChosenSize = this.state.size

    this.props.addToCart(product)
    this.setState({
      goCart: true
    })
  }

  render() {
  const {shop, products, shopUser, isAuthenticated} = this.props
  if (shop) document.title = shop.name
  if (shop) document.getElementById("ico").setAttribute("href", shop.logo)
  let myProduct
    if (shop){ 
      myProduct = products.filter(product => product.id === this.props.match.params.id)[0]
  }

  let list
    if(myProduct){
      list = myProduct.size.map((item, i) => {
        return (
          <option key={i} value={item}>{item}</option>
        )
      })
    }
    return (
      <div>
        {this.state.goCart && <Redirect to={`/shops/${this.props.match.params.name}/cart`}></Redirect>}
        {shop && 
      <React.Fragment>
        <div style={shop.styles.background} className={this.state.edit ? "landing-main-wrapper" : undefined}>
          {this.state.edit && <div className="editform-wrapper"><EditProductForm add={this.modifyEdit} myProduct={myProduct}></EditProductForm></div>}  
          <div className={this.state.edit ? "landing-wrapper hide-me" : "main-background"}>
            <LandingHeader></LandingHeader>
            <div className="container">
            <div className="container detail-product-wrapper pb-5">

                <div className="product-detail-main-section">
                  <div>
                    <img className="image-detail-product" src={myProduct.image} alt="product pic"/>
                  </div>
                  <div className="product-detail-info-section">
                    <h1 style={shop.styles.text}>{myProduct.name}</h1>
                    <p><span className='wrong-price'>{myProduct.priceBefore ? myProduct.priceBefore:(myProduct.price*2).toFixed(2)}{shop.currency==="USD" ? "$":"€"}</span> <span className='correct-price'>{myProduct.price}{shop.currency==="USD" ? "$":"€"}</span></p>
                    {(myProduct.size && myProduct.size.length>=1) ? (<div>
                      <label style={shop.styles.text} className="mr-sm-2" htmlFor="inlineFormCustomSelect">Choose your size</label>
                      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={this.handleChange}>
                      <option value="">Choose you size</option>
                      {list}
                      </select>
                      </div>): (
                      <div>
                      <label style={shop.styles.text} className="mr-sm-2" htmlFor="inlineFormCustomSelect">Choose your size</label>
                      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={this.handleChange}>
                      <option value="">Choose you size</option>
                      <option value="One Size">One Size</option>
                      </select></div>)
                    }
                    {(isAuthenticated() && shopUser.name === shop.name) ? <button className={"btn btn-md btn-secondary button-detail-edit-product"} onClick={() => this.modifyEdit()}>EDIT PRODUCT</button>:<button className={this.state.size ? "btn btn-md btn-primary button-detail-product" : "btn btn-md btn-primary button-detail-product disabled"} onClick={() => this.addingToCart(myProduct)}>Add to cart</button>}
                    <p style={shop.styles.text} className="detail-product-description">{myProduct.description}</p>
                    <p style={shop.styles.background} className="tell-to-buy"><strong style={shop.styles.text}>Click </strong><span className="tell-to-buy-clic">Add To Cart</span><strong style={shop.styles.text}> To Get Yours Now! Limited Quantity - Will sell out fast!</strong></p>
                  </div>
                </div>
            </div>
            </div>
            <LandingFooter></LandingFooter>
          </div>
        </div>
      </React.Fragment>
      }
      </div>
  )}
}

export default WithAuthContext(withShopContext(DetailProducts))