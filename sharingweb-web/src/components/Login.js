import React from 'react'
import '../css/Register.css'
import AuthServices from '../services/AuthServices'
import { Redirect } from 'react-router-dom'
import { WithAuthContext } from '../contexts/AuthStore'
import { withShopContext } from '../contexts/ShopStore'

const PASS_PATTERN  = /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])))/;

const validators ={
  name: v => v.length > 0,
  password: v => PASS_PATTERN.test(v) & v.length >= 8
}

const modifyName = (name) => {
  name = name.toLowerCase()
  name = name.split("")
  name = name.map(item => {
      if(item === " ") return "-"
      else return item
  })
  name = name.join("")
  return name;
}


class Login extends React.Component {
  state = {
    shop: {
      name: '',
      password: '',
    },
    errors: {
      name: true,
      password: true
    },
    touch: {
      name: false,
      password: false
    },
    goShop: false,
    wrongCredentials: false
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

    this.props.updateShop(modifyName(shop.name))

    AuthServices.authenticate(shop)
      .then(
        response => {
          this.props.onShopChange(response.data)
          this.setState({ 
            goShop: true,
            name: shop.name
          })
        },
        error => {
          this.setState({ 
            wrongCredentials: true,
            errors: {
              name: true,
              password: true
            }
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
    const { shop, errors, touch, goShop } = this.state
    return (

      (goShop === true) ?
      <Redirect to={`/shops/${modifyName(this.state.name)}`}/>:
      (
        <div className="register-background">
          <div className="register-component">
            <button className="btn btn-danger close-button" onClick={() => 
              this.props.login()}
              ><i className="fa fa-times-circle close-icon"></i></button>
            <h1>Log in</h1>
            <form onSubmit={this.handleSubmit} className="register-form">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Shop name</label>
                <input name='name'
                  type="text"
                  value={shop.name}
                  className={`form-control ${this.getValidationClassName("name")}`}
                  id="exampleInputEmail1"
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
                      Invalid shop name or password.
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
                      Invalid shop name or password.
                    </div>)}
              </div>
              <button type="submit" className="btn btn-primary register-button">Submit</button>
            </form>
          </div>
        </div>
      ) 
    )
  }
}

export default withShopContext(WithAuthContext(Login))