import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginContainer,
  FormContainer,
  WebsiteLogoLightContainer,
  WebsiteLogoDarkContainer,
  LabelElement,
  InputElement,
  CheckboxContainer,
  Checkbox,
  CheckboxLabelElement,
  LoginButton,
  ErrorMsg,
} from './styledComponent'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  responseSuccessfully = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  responseFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()

    if (response.ok === true) {
      this.responseSuccessfully(fetchedData.jwt_token)
    } else {
      this.responseFailure(fetchedData.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showErrorMsg,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')

    const type = showPassword ? 'text' : 'password'
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLightMode} = value
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          return (
            <LoginContainer>
              <FormContainer
                lightMode={isLightMode}
                onSubmit={this.onSubmitForm}
              >
                <WebsiteLogoLightContainer
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                  isTrue={isLightMode}
                />
                <WebsiteLogoDarkContainer
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                  isTrue={isLightMode}
                />
                <LabelElement htmlFor="username" lightMode={isLightMode}>
                  USERNAME
                </LabelElement>
                <InputElement
                  type="text"
                  id="username"
                  lightMode={isLightMode}
                  placeholder="Username"
                  value={username}
                  onChange={this.onChangeUsername}
                />
                <LabelElement htmlFor="password" lightMode={isLightMode}>
                  PASSWORD
                </LabelElement>
                <InputElement
                  type={type}
                  id="password"
                  lightMode={isLightMode}
                  placeholder="Password"
                  value={password}
                  onChange={this.onChangePassword}
                />
                <CheckboxContainer>
                  <Checkbox
                    type="checkbox"
                    id="checkbox"
                    onChange={this.onChangeCheckbox}
                  />
                  <CheckboxLabelElement
                    htmlFor="checkbox"
                    lightMode={isLightMode}
                  >
                    Show Password
                  </CheckboxLabelElement>
                </CheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FormContainer>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
