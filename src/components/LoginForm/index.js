// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {userName, password} = this.state

    const userDetails = {userName, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data)
  }

  changeUserName = event => {
    this.setState({userName: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {userName, password} = this.state

    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="log-in-logo"
        />
        <div className="form-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <label className="label-element" htmlFor="userName">
              USER NAME
            </label>
            <input
              placeholder="Username"
              className="name-input"
              type="text"
              id="userName"
              onChange={this.changeUserName}
              value={userName}
            />

            <label className="label-element" htmlFor="password">
              PASSWORD
            </label>
            <input
              placeholder="Password"
              className="name-input"
              type="password"
              id="password"
              onChange={this.changePassword}
              value={password}
            />

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
