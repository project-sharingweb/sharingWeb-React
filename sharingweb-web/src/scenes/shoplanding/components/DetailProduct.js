import React from 'react'
import LandingHeader from '../components/LandingHeader'
import {withShopContext} from '../../../contexts/ShopStore';
import LandingFooter from './LandingFooter';
import "../css/DetailProduct.css"
import ProductCard from './ProductCard';



const DetailProducts = (props) => {
let myProduct
  if (props.shop){  
  myProduct = props.products.filter(product => product.id === props.match.params.id)[0]
}
  return (
    <div>
      {props.shop && 
    
    <div className="container1">
      <LandingHeader></LandingHeader>
      <div className="container">
          <div className="row">
              <div className="col-md-8 col-md-offset-2">
                  <div className="row" id="gradient">
                      <div className="col-md-4">
                          <img className="logo-image2" src={myProduct.image} alt="product-card"/>
                      </div>
                      <div className="col-md-8" id="overview">
                          <div className="row">
                              <div className="col-xs-6 col-md-6">
                                  <ul className="pb-product-details-ul">
                                      <li><span className="fa fa-calendar">&nbsp;Detail porduct</span></li>
                                      <li><span className="fa fa-phone">&nbsp;Price</span></li>
                                      <li><span className="fa fa-bluetooth-b">&nbsp;Cantidad</span></li>
                                      <li><span className="fa fa-microchip">&nbsp;Category</span></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-xs-3 col-md-3 pb-product-details-fa">
                                  <span className="fa fa-mobile fa-lg"></span>
                                  <h3><strong>Price</strong></h3>
                                  <p>Category</p>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
      <LandingFooter></LandingFooter>
    </div>
    }
    </div>
  )
}

export default withShopContext(DetailProducts)