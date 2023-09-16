import {Link, withRouter} from 'react-router-dom'

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

      return (
        <SidebarContainer dark={isDarkTheme}>
          <MenuList />
          <ContactUsContainer dark={isDarkTheme}>
            <ContactUsHeading as="p">Contact us</ContactUsHeading>
            <CompanyImage
              alt="facebook logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            />
            <CompanyImage
              alt="twitter logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
            />
            <CompanyImage
              alt="linked in logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            />
            <ContactsDescription as="p">
              Enjoy! Now to see your channels and recommendations!
            </ContactsDescription>
          </ContactUsContainer>
        </SidebarContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(Sidebar)
