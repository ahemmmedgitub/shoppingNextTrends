// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    InputUserName: '',
    InputPassword: '',
    errorMsg: false,
  }

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {InputUserName, InputPassword} = this.state

    if (InputUserName === '') {
      this.setState({errorMsg: true})
    }

    if (InputPassword === '') {
      this.setState({errorMsg: true})
    }

    const userDetails = {
      username: InputUserName,
      password: InputPassword,
    }

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessLogin()
    } else {
      this.setState({errorMsg: true})
    }
  }

  changeUserName = event => {
    this.setState({InputUserName: event.target.value})
  }

  changePassword = event => {
    this.setState({InputPassword: event.target.value})
  }

  render() {
    const {InputUserName, InputPassword, errorMsg} = this.state

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
              USERNAME
            </label>
            <input
              placeholder="Username"
              className="name-input"
              type="text"
              id="userName"
              onChange={this.changeUserName}
              value={InputUserName}
            />

            <label className="label-element" htmlFor="password">
              PASSWORD
            </label>
            <input
              placeholder="Password"
              className="name-input pswrd"
              type="password"
              id="password"
              onChange={this.changePassword}
              value={InputPassword}
            />
            {errorMsg && (
              <p className="error-msg">*Username and Password didn't match</p>
            )}

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
