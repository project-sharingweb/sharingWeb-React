import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter } from "mdbreact";
import '../css/ProductCard.css'
import {withShopContext} from '../../../contexts/ShopStore'
import { Link, } from 'react-router-dom';
import {WithAuthContext} from '../../../contexts/AuthStore'

class ProductCard extends React.Component {

  eliminate = () => {
    this.props.deleteProduct(this.props.product)
  }
  
  render() {
    const {shop, product, addToCart, isAuthenticated} = this.props
    return (
        <div className="product-wrapper">
          <MDBCard narrow ecommerce className="mb-2 card-wrapper">
            <MDBCardImage
              cascade
              top
              src={product.image}
              alt="sample photo"
              className="card-image"
            />
            <MDBCardBody cascade>
              <a href="#!" className="text-muted">
                <h5>{product.category}</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <Link to={`/shops/${shop.urlName}/products/${product.id}`}>{product.name}</Link>
                </strong>
              </MDBCardTitle>
              <MDBCardText>
                {product.descriptionPreview}
              </MDBCardText>
              <MDBCardFooter className="px-1">
                <span className="float-left mr-3 pt-2 card-price">{product.price}€</span>
                {(isAuthenticated() && this.props.shopUser.name === shop.name) ? <button className="btn btn-md btn-danger" onClick={() => this.eliminate()}>Delete</button> :
                <button className="btn btn-md btn-primary" onClick={() => addToCart(product)}>Add to cart</button>}
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </div>
      )
  }
}

export default WithAuthContext(withShopContext(ProductCard));