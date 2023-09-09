import {Link, withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {BsFire} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import Context from '../../context/Context'

import {
  SidebarListContainer,
  SidebarListItem,
  LinkParagraph,
} from './styledComponent'
import './index.css'

const routeList = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedvideos: 'SAVED_VIDEOS',
}

const MenuList = props => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme} = value
      const linkClassName = isDarkTheme ? 'dark-sidebar-link' : 'sidebar-link'
      const {match} = props
      const {path} = match

      return (
        <SidebarListContainer>
          <SidebarListItem isActive={path === '/'} dark={isDarkTheme}>
            <Link to="/" className={linkClassName}>
              <AiFillHome size={30} color={path === '/' ? 'red' : undefined} />
              <LinkParagraph>Home</LinkParagraph>
            </Link>
          </SidebarListItem>
          <SidebarListItem isActive={path === '/trending'} dark={isDarkTheme}>
            <Link to="/trending" className={linkClassName}>
              <BsFire
                size={30}
                color={path === '/trending' ? 'red' : undefined}
              />
              <LinkParagraph>Trending</LinkParagraph>
            </Link>
          </SidebarListItem>
          <SidebarListItem isActive={path === '/gaming'} dark={isDarkTheme}>
            <Link to="/gaming" className={linkClassName}>
              <SiYoutubegaming
                size={30}
                color={path === '/gaming' ? 'red' : undefined}
              />
              <LinkParagraph>Gaming</LinkParagraph>
            </Link>
          </SidebarListItem>
          <SidebarListItem
            isActive={path === '/saved-videos'}
            dark={isDarkTheme}
          >
            <Link to="/saved-videos" className={linkClassName}>
              <MdPlaylistAdd
                size={30}
                color={path === '/saved-videos' ? 'red' : undefined}
              />
              <LinkParagraph>Saved videos</LinkParagraph>
            </Link>
          </SidebarListItem>
        </SidebarListContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(MenuList)
