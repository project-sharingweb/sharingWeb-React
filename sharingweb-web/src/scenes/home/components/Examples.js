import React from 'react'
import "../css/example.css"
import BoxExample from './BoxExample';
import ExampleLogo from '../../../images/example.png'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";


const Example = () => {

  return(
    // <div id="examples" className="example-section">
    //   <div className="container">
    //     <h2>This is a example create in Sharing Web.</h2>
    //     <p></p>
    //     <div className="example-content">
    //       <BoxExample image={ExampleLogo} title="Landing page" text=""></BoxExample>
    //     </div>
    //   </div>
    // </div>
    <MDBContainer>
      <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView><img className="d-block w-100" src="https://josefacchin.com/wp-content/uploads/2016/02/landing-page-wordpress.png" alt="First slide"/>
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive"></h3>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://s3.amazonaws.com/cdn.wp.m4ecnet/wp-content/uploads/2018/12/04104047/atribuci%C3%B3n-compras-online-compressor.jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Shop online</h3>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://www.abtasty.com/content/uploads/landing-page-conversion.png"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Accesibilidad</h3>
            <p></p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    
  )
}

export default Example