import React from 'react'
import LandingHeader from './LandingHeader'
import LandingFooter from './LandingFooter';
import {withShopContext} from '../../../contexts/ShopStore'
import "../css/Checkout.css"
import ShopService from '../../../services/ShopService'




class Checkout extends React.Component{
    state={
      order: {
        name: "",
        lastName: "",
        email: "",
        street: "",
        zipCode: "",
        city: "",
        country: "",
        products: this.props.cart ? this.props.cart.map(item => item.id): null,
        cart: this.props.cart ? this.props.cart : null,
        price: this.props.cart ? this.props.cart.reduce((acc,a)=> acc + (parseFloat(a.price)*a.amount),0).toFixed(2).toString() : null,
        amounts: this.props.cart ? this.props.cart.map(item => item.amount): null,
        number: this.props.orders ? (parseInt(this.props.orders[this.props.orders.length - 1].number)+1).toString(): "1",
        sizes: this.props.cart ? this.props.cart.map(item => item.ChosenSize || item.size[0]): null,
        currency: this.props.shop ? this.props.shop.currency || "EUR": null
      }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
          order: {
            ...this.state.order,
            [name]: value
          },
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const {order} = this.state 
        order.shopName = this.props.shop.urlName

        ShopService.purchase(order)
            .then(res => {
                window.location.assign(res.url)
            })
        
    }




render() {
    const {shop} = this.props
    const {order} = this.state

    if (shop) document.title = shop.name + " - Checkout"
    if (shop) document.getElementById("ico").setAttribute("href", shop.logo)
    
    return (
        <div>
            {shop &&
            <div style={shop.styles.background} className="main-background">
                <LandingHeader></LandingHeader>
                <div className="checkout-form pt-5 pb-5"> 
                    <h1 style={shop.styles.text}>Checkout</h1>
                    <form onSubmit={this.handleSubmit} className="order-form mt-2" >
                        <div className="name-form mt-4"> 
                            <div className="form-name">
                                <label style={shop.styles.text} htmlFor="name" className="box-label">Name</label>
                                <input name='name' className="box-input"
                                type="text"
                                value={order.name}
                                id="name"
                                aria-describedby="orderNameHelp"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                />
                                
                            </div>
                            <div className="form-LastName">
                                <label style={shop.styles.text} htmlFor="LastLastName" className="box-label">LastName</label>
                                <input name='lastName' className="box-input"
                                type="string"
                                value={order.lastName}
                                id="lastName"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                />
                            </div>
                        </div>
                        
                        <div className="form-email mt-4" >
                            <label style={shop.styles.text} htmlFor="email" className="boxes-label">Email</label>
                            <input name='email' className="boxes-input"
                            type="string"
                            value={order.email}
                            id="email"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            placeholder="you@example.com"/>
                            
                        </div>
                        <div className="form-street mt-4">
                            <label style={shop.styles.text} htmlFor="Street" className="boxes-label">Street</label>
                            <input name='street' className="boxes-input"
                            type="string"
                            value={order.street}
                            id="Street"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            placeholder="1234 Main St"/>
                            
                        </div>
                        <div className="direcction-box mt-4">
                            <div className="form-zipCode">
                                <label style={shop.styles.text} htmlFor="LastZipCode" className="label-box">ZipCode</label>
                                <input name='zipCode' className="input-box"
                                type="string"
                                value={order.zipCode}
                                id="zipCode"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                />
                                
                            </div>
                            <div className="form-city">
                                <label style={shop.styles.text} htmlFor="City" className="label-box">City</label>
                                <input name='city' className="input-box"
                                type="string"
                                value={order.city}
                                id="City"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder=""/>
                                
                            </div>
                            <div className="form-country">
                                <label style={shop.styles.text} htmlFor="Country" className="label-box">Country</label>
                                <input name='country' className="input-box"
                                type="country"
                                value={order.password}
                                id="Country"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder=""/>
                                
                            </div>
                        </div>
                            <button type="submit" className="paypal-button mt-4">
                                <span className="paypal-button-title">Buy now with</span>
                                <span className="paypal-logo1"><i>Pay</i></span>
                                <span className="paypal-logo2"><i>Pal</i></span>
                            </button>
                    </form>
                
                </div>
                <LandingFooter></LandingFooter>
                
            </div>}
        </div>
    )
}
}
  
  export default withShopContext(Checkout)