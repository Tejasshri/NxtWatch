import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export

export const HeaderContainer = styled.div``

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${props => (props.dark ? '#272727' : '#f9f9f9')};
`

export const NavLogo = styled.img`
  height: 30px;
`

export const NavbarBtnContainer = styled.ul`
  list-style-type: none;
  padding: none;
  display: flex;
  align-items: center;
`

export const BtnListItem = styled.li`
  margin-left: 5px;
`

export const NavBtn = styled.button`
  background-color: transparent;
  border: 0;
`

export const NavProfileBtn = styled.button`
  background-color: transparent;
  border: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavThreeLineBtn = styled.button`
  background-color: transparent;
  border: 0;
  display: none;
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`

export const NavLogoutButtonMobile = styled(NavThreeLineBtn)``

export const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  color: ${props => (props.outline ? '#3b82f6' : '#ffffff')};
  border: 2px solid #3b82f6;
  cursor: pointer;
`

export const OutlineButton = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  background-color: transparent;
  color: ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  border: 2px solid ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoutPopup = styled.div`
  padding: 20px;
  background-color: ${props => (props.dark ? 'rgba(0,0,0,10)' : '#ffffff')};
  margin: 0;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 0px solid white !important;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  max-width: 330px;
`

export const LogoutPopupHeading = styled.div`
  font-size: 17px;
  font-weight: normal;
  color: ${props => (props.dark ? '#ffffff' : null)};
  background-color: ;
  margin-bottom: 20px;
  text-align: center;
`

export const PopupButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  margin-left: auto;
  @media (min-width: 768px) {
    display: none;
  }
`

export const PopupMenuBox = styled.div`
  background-color: ${props => (props.dark ? 'black' : 'white')};
  display: flex;
  flex-direction: column;
  width: 100vw;
  flex-grow: 1;
`
