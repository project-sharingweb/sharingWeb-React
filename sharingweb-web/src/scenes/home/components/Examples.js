import React from 'react'
import "../css/example.css"
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import {Redirect} from 'react-router-dom'
import {withShopContext} from '../../../contexts/ShopStore'

class Example extends React.Component {
  state = {
    goToLolo: false,
    goToSauri: false,
    goToShirts: false
  }

  handleclickLolo = () => {
    this.props.updateShop("fruteria-manolo")
    this.setState({
      goToLolo: true
    })
  }
  handleclickSauri = () => {
    this.props.updateShop("confecciones-sauri")
    this.setState({
      goToSauri: true
    })
  }
  handleclickShirts = () => {
    this.props.updateShop("trishirts")
    this.setState({
      goToShirts: true
    })
  }

  render() {
    const {goToLolo, goToSauri, goToShirts} = this.state
  return (
    <React.Fragment>
      {goToLolo && <Redirect to="/shops/fruteria-manolo"></Redirect>}
      {goToSauri && <Redirect to="/shops/confecciones-sauri"></Redirect>}
      {goToShirts && <Redirect to="/shops/trishirts"></Redirect>}
    <div  id="examples" data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="20"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top" className="example-section pb-5">
      <h2>Our users shops</h2>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={false}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dvjtdeyli/image/upload/v1563735005/game-images/fruteriaManolo_mkgalv.png"
                  alt="First slide"
                  onClick={() => this.handleclickLolo()}
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dvjtdeyli/image/upload/v1563734999/game-images/sauri_htcdjp.png"
                  alt="Second slide"
                  onClick={() => this.handleclickSauri()}
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dvjtdeyli/image/upload/v1563734994/game-images/trishirts_s1xqcw.png"
                  alt="Third slide"
                  onClick={() => this.handleclickShirts()}
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
    </React.Fragment>
  );}
}

export default withShopContext(Example);