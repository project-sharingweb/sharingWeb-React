import React from 'react'

const CURRENT_USER_KEY = 'current-user'
const AuthContext = React.createContext();

class AuthStore extends React.Component {
  state = { 
    user: JSON.parse(localStorage.getItem(CURRENT_USER_KEY || {}))
  }

  handleUserChange = user => {
    this.setState({user})
    if (user) localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))
    else localStorage.removeItem(CURRENT_USER_KEY)
  }

  isAuthenticated = () => this.state.user && this.state.user.email

  render() {
    return (
      <AuthContext.Provider value={{
        user: this.state.user,
        onUserChange: this.handleUserChange,
        isAuthenticated: this.isAuthenticated
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const WithAuthContext = WrappedComponent => {
  return (props) => {
    return (
      <AuthContext.Consumer>
        {(consumerProps) => (<WrappedComponent {...consumerProps} {...props} />)}
      </AuthContext.Consumer>
    )
  }
}

export {AuthContext, WithAuthContext, AuthStore}