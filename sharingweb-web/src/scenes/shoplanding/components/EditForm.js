import React from 'react'
import '../css/EditForm.css'

class EditForm extends React.Component {
  state = {
    shop: {
      navColor: ""
    },
    errors: {
      navColor: false
    },
    touch: {
      navColor: false
    } 
  }


  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      shop: {
        ...this.state.shop,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: false
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

  render() {
    const {shop, errors, touch} = this.state
    return (
      <div>
        <h1>Design your page</h1>
        <form onSubmit="" className="register-form">
          <div className="form-group">
              <label htmlFor="exampleInputNav">Navbar color</label>
              <input name='navColor'
                type="color"
                value={shop.navColor}
                className={`form-control`}
                id="exampleInputNav"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder="Choose your color"/>
            </div>
        </form>
      </div>
    )
  }
}

export default EditForm