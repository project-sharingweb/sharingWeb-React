import React from 'react'
import '../css/Register.css'
import AuthServices from '../services/AuthServices'


const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASS_PATTERN  = /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])))/;

const validators ={
  email: v => EMAIL_PATTERN.test(v),
  password: v => PASS_PATTERN.test(v) & v.length >= 8,
  name: v => v.length > 0,
  contact: v => true,
  latitude: v => true,
  longitude: v => true,
}


class Register extends React.Component {
  state = {
    shop: {
      email: '',
      password: '',
      name: '',
      contact: '',
      latitude: '',
      longitude: ''
    },
    errors: {
      email: true,
      password: true,
      name: true,
      contact: false,
      latitude: false,
      longitude: false
    },
    touch: {
      email: false,
      password: false,
      name: false,
      contact: false,
      latitude: false,
      longitude: false
    }
  }

  getlocation = (e) => {
    e.preventDefault()
  
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({
        ...this.state,
        shop: {
          ...this.state.shop,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
      }})
    });
  }

  handleChange = e => {
    const { name, value } = e.target;
    const isValid = validators[name](value)

    this.setState({
      shop: {
        ...this.state.shop,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: !isValid
      }
    })
  }

  handleBlur = e => {
    const { name } = e.target

    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { shop } = this.state 

    AuthServices.register(shop)
      .then(
        response => {
          this.props.register()
          this.props.login()
        }, 
        error => {
            this.setState({
              ...this.state,
              errors: {
                ...this.state.errors,
                email: true,
                name: true
              },
            })
        }
      )
  }


  getValidationClassName = (attr) => {
    const { errors, touch } = this.state

    if (!touch[attr]){return ""}
    else if (errors[attr]) {return "is-invalid"}
    else {return "is-valid"}
  }

  render() { 
    const { shop, errors, touch } = this.state
    return (
        <div className="register-background register-background-mobile" data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="20"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top">
          <div className="register-component">
            <i onClick={() => this.props.register()} className="fa fa-times-circle close-button"></i>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="exampleInputEmail">Email address</label>
                <input name='email'
                  type="email"
                  value={shop.email}
                  className={`form-control ${this.getValidationClassName("email")}`}
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  placeholder="Enter email"/>
                  {touch.email && !errors.email && (
                    <div className="valid-feedback">
                      Looks good!
                    </div>)}
                    {touch.email && errors.email && (
                    <div className="invalid-feedback">
                      This email is already used or a invalid address.
                    </div>)}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name='password'
                  type="password"
                  value={shop.password}
                  className={`form-control ${this.getValidationClassName("password")}`}
                  id="exampleInputPassword1"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  placeholder="Password"/>
                  {touch.password && !errors.password && (
                    <div className="valid-feedback">
                      Looks good!
                    </div>)}
                    {touch.password && errors.password && (
                    <div className="invalid-feedback">
                      Invalid email or password. Must include at least one capital letter, one number and be larger than 8 chars
                    </div>)}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName">Shop name</label>
                <input name='name'
                  type="text"
                  value={shop.name}
                  className={`form-control ${this.getValidationClassName("name")}`}
                  id="exampleInputName"
                  aria-describedby="shopNameHelp"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  placeholder="Enter name for your shop"/>
                  {touch.name && !errors.name && (
                    <div className="valid-feedback">
                      Looks good!
                    </div>)}
                    {touch.name && errors.name && (
                    <div className="invalid-feedback">
                      Shop name is required. The name is already registered
                    </div>)}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPhoneNumber">Phone number</label>
                <input name='contact'
                  type="text"
                  value={shop.contact}
                  className={`form-control`}
                  id="exampleInputPhoneNumber"
                  aria-describedby="phoneNumberHelp"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  placeholder="Enter your phone number"/>
              </div>
              <div className="form-group">
                <label>Coordinates</label>
                <input name='latitude'
                  type="text"
                  value={shop.latitude}
                  className={`form-control mb-2`}
                  aria-describedby="coordinatesHelp"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  placeholder="Latitude"/>
                <input name='longitude'
                  type="text" value={shop.longitude}
                  className={`form-control`}
                  aria-describedby="coordinatesHelp"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  placeholder="Longitude"/>
              </div>
              <button onClick={this.getlocation} className="btn btn-default register-button">Get your coordinates</button>
              <button type="submit" className="btn btn-primary register-button">Submit</button>
            </form>
          </div>
        </div>
      ) 
  }
}

export default Register 