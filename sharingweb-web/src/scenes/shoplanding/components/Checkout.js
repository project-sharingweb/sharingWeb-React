import React from 'react'
import LandingHeader from './LandingHeader'
import LandingFooter from './LandingFooter';
import {withShopContext} from '../../../contexts/ShopStore'
import "../css/Checkout.css"




class Checkout extends React.Component{
    state={
      order: {
        name: "",
        lastName: "",
        email: "",
        street: "",
        zipCode: "",
        city: "",
        country: ""
        },
        touch: {
            name: false,
            password: false
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

    




render() {
    const {shop} = this.props
    const {order, touch} = this.state
    return (
        <div>
            {shop &&
            <div>
                <LandingHeader></LandingHeader>
                <div className="checkout-form mt-2 mb-5"> 
                    <h1>Checkout</h1>
                    <form onSubmit={this.handleSubmit} className="order-form" mt-2>
                        <div className="name-form mt-4"> 
                            <div className="form-name">
                                <label htmlFor="exampleInputname" className="box-label">Name</label>
                                <input name='name' className="box-input"
                                type="text"
                                value={order.name}
                                id="exampleInputEmail1"
                                aria-describedby="orderNameHelp"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                />
                                
                            </div>
                            <div className="form-LastName">
                                <label htmlFor="exampleInputLastLastName" className="box-label">LastName</label>
                                <input name='lastName' className="box-input"
                                type="string"
                                value={order.lastName}
                                id="exampleInputlastName"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                />
                            </div>
                        </div>
                        
                        <div className="form-email mt-4" >
                            <label htmlFor="exampleInputemail" className="boxes-label">Email</label>
                            <input name='email' className="boxes-input"
                            type="string"
                            value={order.email}
                            id="exampleInputemail"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            placeholder="you@example.com"/>
                            
                        </div>
                        <div className="form-street mt-4">
                            <label htmlFor="exampleInputLastStreet" className="boxes-label">Street</label>
                            <input name='street' className="boxes-input"
                            type="string"
                            value={order.street}
                            id="exampleInputStreet"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            placeholder="1234 Main St"/>
                            
                        </div>
                        <div className="direcction-box mt-4">
                            <div className="form-zipCode">
                                <label htmlFor="exampleInputLastZipCode" className="label-box">ZipCode</label>
                                <input name='zipCode' className="input-box"
                                type="string"
                                value={order.zipCode}
                                id="exampleInputzipCode"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                />
                                
                            </div>
                            <div className="form-city">
                                <label htmlFor="exampleInputCity" className="label-box">City</label>
                                <input name='city' className="input-box"
                                type="string"
                                value={order.city}
                                id="exampleInputCity"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder=""/>
                                
                            </div>
                            <div className="form-country">
                                <label htmlFor="exampleInputCountry" className="label-box">Country</label>
                                <input name='country' className="input-box"
                                type="country"
                                value={order.password}
                                id="exampleInputCountry"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder=""/>
                                
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary register-button mt-4">Pay to PayPal</button>
                    </form>
                
                </div>
                <LandingFooter></LandingFooter>
                
            </div>}
        </div>
    )
}
}
  
  export default withShopContext(Checkout)