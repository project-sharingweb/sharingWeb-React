import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";

const ProductMd = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
      Zapatos LOLI
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        your preferd shop in Chamberi.
      </p>
          <MDBRow>
              <MDBCol md="4">
                <MDBCard narrow ecommerce className="mb-2">
                  <MDBCardImage
                    cascade
                    top
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg"
                    alt="sample photo"
                  />
                  <MDBCardBody cascade>
                    <a href="#!" className="text-muted">
                      <h5>Shoes</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href="#!">Leather boots</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor
                      sit amet, consectetur, adipisci.
                    </MDBCardText>
                    <MDBCardFooter className="px-1">
                      <span className="float-left">69$</span>
                      <span className="float-right">
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
          </MDBRow>
    </section>
  );
}

export default ProductMd;