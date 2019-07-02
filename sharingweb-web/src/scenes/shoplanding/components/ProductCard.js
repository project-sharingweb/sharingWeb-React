import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter } from "mdbreact";
import '../css/ProductCard.css'

const ProductCard = ({product}) => {
  return (
    <div className="product-wrapper">
      <MDBCard narrow ecommerce className="mb-2">
        <MDBCardImage
          cascade
          top
          src={product.image}
          alt="sample photo"
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
            {product.description}
          </MDBCardText>
          <MDBCardFooter className="px-1">
            <span className="float-left">{product.price}€</span>
            <span className="float-right">
            </span>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default ProductCard;