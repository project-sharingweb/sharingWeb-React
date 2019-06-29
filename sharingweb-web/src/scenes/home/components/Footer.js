import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import  "../css/Footer.css"
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <MDBFooter color="cyan" className="font-small pt-4 bgmarta">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="my-4">
          <MDBCol md="4" lg="4">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Sharing Web
            </h5>
            <p>
              
            </p>
            <p>
            In SharingWeb it doesn't matter if you need a professional website for your business, a nice portfolio or an intuitive online store for visitors, you will have the right tool to create a website as you want.{" "}
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="ml-auto">
            <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
            <ul className="list-unstyled">
              <p>
                <a href="#about-us">ABOUT US</a>
              </p>
              <p>
                <a href="#examples">EXAMPLES</a>
              </p>
              <p>
                <a href="#comments">COMMENTS</a>
              </p>
              <p>
                <a href="#team">TEAM</a>
              </p>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="5" lg="3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
            <p>
              <i className="fa fa-home mr-3" /> Madrid
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@sharingweb.com
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 34 611 111 11
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="text-center">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Follow us
            </h5>
            <p>
              <i className="fa fa-facebook" /> facebook
            </p>
            <p>
              <i className="fa fa-twitter" /> Twiter
            </p>
            <p>
              <i className="fa fa-google-plus" /> Google
            </p>
            <div className="mt-2 ">
              
            </div>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#home"> Sharingweb.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
