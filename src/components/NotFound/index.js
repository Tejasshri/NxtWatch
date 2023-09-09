import Context from '../../context/Context'
import Header from '../Header'
import Sidebar from '../Sidebar'

import './index.css'
import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundSection,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponent'

const NotFound = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      console.log(isDarkTheme)
      return (
        <NotFoundContainer dark={isDarkTheme}>
          <Header />
          <NotFoundContent>
            <Sidebar />
            <NotFoundSection dark={isDarkTheme}>
              <NotFoundImage alt="not found" src={notFoundImageUrl} />
              <NotFoundHeading>Page Not Found</NotFoundHeading>
              <NotFoundDescription>
                We are sorry, the page you requested could not found.
              </NotFoundDescription>
            </NotFoundSection>
          </NotFoundContent>
        </NotFoundContainer>
      )
    }}
  </Context.Consumer>
)

export default NotFound

/*
<NotFoundContainer>
          <Header />
        </NotFoundContainer>
*/
