import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter } from "mdbreact";
import '../css/ProductCard.css'
import {withShopContext} from '../../../contexts/ShopStore'

const ProductCard = ({product, addToCart}) => {
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
              <a href="#!">{product.name}</a>
            </strong>
          </MDBCardTitle>
          <MDBCardText>
            {product.descriptionPreview}
          </MDBCardText>
          <MDBCardFooter className="px-1">
            <span className="float-left">{product.price}€</span>
            <span className="float-right">
            </span>
            <button onClick={() => addToCart}>Add to cart</button>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default withShopContext(ProductCard);