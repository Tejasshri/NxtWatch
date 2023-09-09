import {Link, withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {BsFire} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import Context from '../../context/Context'
import MenuList from '../MenuList'

import {
  SidebarContainer,
  ContactUsContainer,
  CompanyImage,
  ContactUsHeading,
  ContactsDescription,
} from './styledComponent'
import './index.css'

const routeList = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedvideos: 'SAVED_VIDEOS',
}

const Sidebar = props => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme} = value
      const linkClassName = isDarkTheme ? 'dark-sidebar-link' : 'sidebar-link'
      const {match} = props
      const {path} = match
      console.log(path)

      return (
        <SidebarContainer dark={isDarkTheme}>
          <MenuList />
          <ContactUsContainer dark={isDarkTheme}>
            <ContactUsHeading>Contact us</ContactUsHeading>
            <CompanyImage
              alt=""
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            />
            <CompanyImage
              alt=""
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
            />
            <CompanyImage
              alt=""
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            />
            <ContactsDescription>
              Enjoy! Now to see your channels and recommendations!
            </ContactsDescription>
          </ContactUsContainer>
        </SidebarContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(Sidebar)
