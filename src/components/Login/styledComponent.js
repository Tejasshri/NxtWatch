import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        border: 1px solid red;
    }
`

export const LoginContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.dark ? '#000000' : '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.dark ? '#272727' : '#ffffff')};
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  padding: 20px;
  border-radius: 10px;
  width: 340px;
  @media screen and (max-width: 360px) {
    width: 100%;
  }
`

export const LogoImage = styled.img`
  height: 35px;
  margin-bottom: 25px;
`
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.dark ? '#ffffff' : '#475569')};
  margin-bottom: 5px;
`

export const UserInput = styled.input`
  border: 2px solid grey;
  border-radius: 4px;
  height: 38px;
  width: ${props => (props.checkbox ? '20px' : 'auto')};
  padding: 5px 10px;
  background-color: transparent;
  outline: none;
  font-size: 16px;
`

export const CustomBtn = styled.button`
  width: 100%;
  height: 35px;
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  color: white;
  background-color: #3b82f6;
`

export const InputCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`

export const ErrorMsg = styled.p`
  color: red;
  font-weight: 600;
  font-size: 12px;
  align-self: flex-start;
`
