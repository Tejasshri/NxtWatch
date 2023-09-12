import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Context from '../../context/Context'

import {
  LoginContainer,
  LoginForm,
  LogoImage,
  InputContainer,
  Label,
  UserInput,
  CustomBtn,
  InputCheckboxContainer,
  ErrorMsg,
} from './styledComponent'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errMsg: '',
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onChangeShowPassword = () =>
    this.setState(prevState => ({showPassword: !prevState.showPassword}))

  renderUsernameInputBox = () => {
    const {username} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <InputContainer>
              <Label htmlFor="username" dark={isDarkTheme}>
                USERNAME
              </Label>
              <UserInput
                type="text"
                value={username}
                onChange={this.onChangeUsername}
                id="username"
              />
            </InputContainer>
          )
        }}
      </Context.Consumer>
    )
  }

  renderPasswordInputBox = () => {
    const {password, showPassword} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <InputContainer>
              <Label dark={isDarkTheme} htmlFor="password">
                PASSWORD
              </Label>
              <UserInput
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={this.onChangePassword}
                id="password"
              />
            </InputContainer>
          )
        }}
      </Context.Consumer>
    )
  }

  renderCheckBoxContainer = () => (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <InputCheckboxContainer>
            <UserInput
              onClick={this.onChangeShowPassword}
              type="checkbox"
              checkbox
            />
            <Label dark={isDarkTheme}>Show Password</Label>
          </InputCheckboxContainer>
        )
      }}
    </Context.Consumer>
  )

  onSuccessfulSubmit = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onClickSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessfulSubmit(data.jwt_token)
    } else {
      this.setState({errMsg: data.error_msg, showError: true})
    }
  }

  render() {
    const {showError, errMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer dark={isDarkTheme}>
              <LoginForm dark={isDarkTheme} onSubmit={this.onClickSubmit}>
                <LogoImage src={logoUrl} />
                {this.renderUsernameInputBox()}
                {this.renderPasswordInputBox()}
                {this.renderCheckBoxContainer()}
                <CustomBtn type="submit">Login</CustomBtn>
                {showError && <ErrorMsg>*{errMsg}</ErrorMsg>}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Login
