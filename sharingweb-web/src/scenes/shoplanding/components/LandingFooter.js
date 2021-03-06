import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {withShopContext} from '../../../contexts/ShopStore';
import {WithAuthContext} from '../../../contexts/AuthStore';
import MapContainer from '../../../components/MapContainer';
import { Link } from 'react-router-dom'
import '../css/LandingFooter.css'

const LandingFooter = props => {
  const {shop, isAuthenticated, shopUser} = props

  return (
    <div className="landing-footer-down">
      <MDBFooter style={shop.styles.footerBackground} className="font-small">
        <MDBContainer fluid className="container text-center text-md-left">
          <MDBRow className="pt-5 pb-5">
            <MDBCol md="4">
              <h5 style={shop.styles.footerFont} className="title">{shop.name}</h5>
              <p style={shop.styles.footerFont}>
                In {shop.name} online store you can find what you were looking for.
              </p>
              <p style={shop.styles.footerFont}> Phone number {shop.contact} </p>
            </MDBCol>
            <MDBCol md="5" className="ml-3 mr-5 map-height">
              <MapContainer></MapContainer>
            </MDBCol>
            <MDBCol md="2">
              <h5 style={shop.styles.footerFont} className="title">Links</h5>
              <div>
                <li className="list-unstyled">
                  <Link style={shop.styles.footerFont} to={`/shops/${shop.urlName}/about-us`}>About us</Link>
                </li>
                <li className="list-unstyled">
                  <Link style={shop.styles.footerFont} to={`/shops/${shop.urlName}/products`}>Products</Link>
                </li>
                { (isAuthenticated() && shopUser.name === shop.name) && <li className="list-unstyled">
                  <Link style={shop.styles.footerFont} to={`/shops/${shop.urlName}/orders`}>Orders</Link>
                </li>}
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer style={shop.styles.footerFont} fluid className="pt-3 pb-3">
            &copy; {new Date().getFullYear()} Copyright: <Link to="/"><span style={shop.styles.footerFont} className="bold"> Powered by: SharingWeb</span></Link>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default WithAuthContext(withShopContext(LandingFooter));