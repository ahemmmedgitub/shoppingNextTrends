// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    InputUserName: '',
    InputPassword: '',
    intialErrorMsg: '',
    errorMsgStatuse: false,
  }

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      initialErrorMsg: errorMsg,
      errorMsgStatuse: true,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {InputUserName, InputPassword} = this.state

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
      this.onSubmitFailure(data.error_msg)
    }
  }

  changeUserName = event => {
    this.setState({InputUserName: event.target.value})
  }

  changePassword = event => {
    this.setState({InputPassword: event.target.value})
  }

  render() {
    const {
      InputUserName,
      InputPassword,
      initialErrorMsg,
      errorMsgStatuse,
    } = this.state

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
            {errorMsgStatuse && <p className="error-msg">*{initialErrorMsg}</p>}

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
