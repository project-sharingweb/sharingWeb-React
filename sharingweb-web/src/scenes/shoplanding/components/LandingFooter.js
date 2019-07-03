import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {withShopContext} from '../../../contexts/ShopStore'
import MapContainer from '../../../components/MapContainer';

const LandingFooter = ({shop}) => {
  return (
    <div >
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="container text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <h5 className="title">{shop.name}</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <MapContainer></MapContainer>
            </MDBCol>
            <MDBCol md="2">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid className="pt-3 pb-3">
            &copy; {new Date().getFullYear()} Copyright: <span> Powered by: SharingWeb</span>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default withShopContext(LandingFooter);