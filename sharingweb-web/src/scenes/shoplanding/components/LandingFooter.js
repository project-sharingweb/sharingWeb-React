import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {withShopContext} from '../../../contexts/ShopStore'
import MapContainer from '../../../components/MapContainer';

const LandingFooter = ({shop}) => {
  return (
    <div >
      <MDBFooter style={shop.styles.footerBackground} className="font-small">
        <MDBContainer fluid className="container text-center text-md-left">
          <MDBRow className="pt-5 pb-5">
            <MDBCol md="4">
              <h5 style={shop.styles.footerFont} className="title">{shop.name}</h5>
              <p style={shop.styles.footerFont}>
                Here you can use rows and columns here to organize your footer
                content.
                {shop.contact}
              </p>
            </MDBCol>
            <MDBCol md="5" className="ml-3 mr-5 map-height">
              <MapContainer></MapContainer>
            </MDBCol>
            <MDBCol md="2">
              <h5 style={shop.styles.footerFont} className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a style={shop.styles.footerFont} href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a style={shop.styles.footerFont} href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a style={shop.styles.footerFont} href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a style={shop.styles.footerFont} href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid className="pt-3 pb-3">
            &copy; {new Date().getFullYear()} Copyright: <span className="bold"> Powered by: SharingWeb</span>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default withShopContext(LandingFooter);