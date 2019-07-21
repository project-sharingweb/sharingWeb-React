import React from 'react'
import HomeSharingHeader from './components/HomeSharingHeader'
import HomeImage from './components/HomeImage'
import './css/Home.css'
import AboutUs from './components/AboutUs';
import Examples from './components/Examples';
import Comments from './components/Comments';
import Team from './components/Team';
import Footer from './components/Footer';
import Register from '../../components/Register';
import Login from '../../components/Login';




class Home extends React.Component {
  state = {
    login: false,
    register: false
  }

  modifyLogin = () => {
    const {login} = this.state

    login ?
    this.setState({
      ...this.state,
      login: false
    }):
    this.setState({
      ...this.state,
      login: true
    })

  } 

  modifyRegister = () => {
    const {register} = this.state

    register ?
    this.setState({
      ...this.state,
      register: false
    }):
    this.setState({
      ...this.state,
      register: true
    })

  } 

  render() {
    const {register, login } = this.state
    return (
      <div>
        {register && <Register register={this.modifyRegister} login={this.modifyLogin}></Register>}
        {login && <Login login={this.modifyLogin}></Login>}
        <div className={(login || register)? "hide-me": undefined}>
          <div className="first-section">
            <HomeSharingHeader></HomeSharingHeader>
            <HomeImage login={this.modifyLogin} register={this.modifyRegister}></HomeImage>
          </div>
          <AboutUs></AboutUs>
          <Examples></Examples>
          <Comments></Comments>
          <Team></Team>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default Home