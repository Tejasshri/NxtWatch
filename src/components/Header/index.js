import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {FiSun, FiMoon, FiLogOut} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'
import {AiOutlineMenu} from 'react-icons/ai'
import Context from '../../context/Context'
import MenuList from '../MenuList'

import {
  HeaderContainer,
  Nav,
  NavLogo,
  NavbarBtnContainer,
  NavBtn,
  NavProfileBtn,
  BtnListItem,
  NavLogoutButtonMobile,
  OutlineButton,
  NavThreeLineBtn,
  LogoutPopup,
  LogoutPopupHeading,
  PopupButtonBox,
  Button,
  CloseButton,
  PopupMenuBox,
} from './styledComponent'
import './index.css'

const Header = props => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme, onChangeTheme} = value
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      return (
        <HeaderContainer>
          <Nav dark={isDarkTheme}>
            <Link to="/" className="nav-logo-link">
              <NavLogo src={logoUrl} alt="website logo" />
            </Link>
            <NavbarBtnContainer>
              <BtnListItem>
                <NavBtn
                  type="button"
                  onClick={() => onChangeTheme()}
                  data-testid="theme"
                >
                  {isDarkTheme ? (
                    <FiSun color="#ffffff" size={30} />
                  ) : (
                    <FiMoon color="#000000" size={30} />
                  )}
                </NavBtn>
              </BtnListItem>
              <BtnListItem>
                <NavProfileBtn>
                  <NavLogo
                    className=""
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                </NavProfileBtn>
                <Popup
                  modal
                  trigger={
                    <NavThreeLineBtn>
                      <AiOutlineMenu
                        size={30}
                        color={isDarkTheme ? '#ffffff' : ''}
                      />
                    </NavThreeLineBtn>
                  }
                  className="my-popup"
                >
                  {close => (
                    <PopupMenuBox dark={isDarkTheme}>
                      <CloseButton onClick={() => close()}>
                        <MdClose
                          size={30}
                          color={isDarkTheme ? 'white' : 'black'}
                        />
                      </CloseButton>
                      <div className="popup-container">
                        <MenuList />
                      </div>
                    </PopupMenuBox>
                  )}
                </Popup>
              </BtnListItem>
              <BtnListItem>
                <Popup
                  modal
                  trigger={
                    <OutlineButton dark={isDarkTheme} type="button">
                      Logout
                    </OutlineButton>
                  }
                >
                  {close => (
                    <LogoutPopup dark={isDarkTheme}>
                      <LogoutPopupHeading as="p" dark={isDarkTheme}>
                        Are you sure, you want to logout?
                      </LogoutPopupHeading>
                      <PopupButtonBox>
                        <OutlineButton
                          dark={isDarkTheme}
                          type="button"
                          onClick={() => close()}
                        >
                          Cancel
                        </OutlineButton>
                        <Button type="button" onClick={onClickLogout}>
                          Confirm
                        </Button>
                      </PopupButtonBox>
                    </LogoutPopup>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <NavLogoutButtonMobile type="button">
                      <FiLogOut
                        size={30}
                        color={isDarkTheme ? '#ffffff' : null}
                      />
                    </NavLogoutButtonMobile>
                  }
                >
                  {close => (
                    <LogoutPopup dark={isDarkTheme}>
                      <LogoutPopupHeading as="p" dark={isDarkTheme}>
                        Are you sure, you want to logout?
                      </LogoutPopupHeading>
                      <PopupButtonBox>
                        <OutlineButton
                          dark={isDarkTheme}
                          type="button"
                          onClick={() => close()}
                          style={{display: 'inline-block'}}
                        >
                          Cancel
                        </OutlineButton>
                        <Button type="button" onClick={onClickLogout}>
                          Confirm
                        </Button>
                      </PopupButtonBox>
                    </LogoutPopup>
                  )}
                </Popup>
              </BtnListItem>
            </NavbarBtnContainer>
          </Nav>
        </HeaderContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(Header)

/*
<OutlineButton dark={isDarkTheme} type="button">
                        Logout
                      </OutlineButton>
                      <NavLogoutButtonMobile type="button">
                        <LuLogOut
                          size={30}
                          color={isDarkTheme ? '#ffffff' : ''}
                        />
                      </NavLogoutButtonMobile>
*/
