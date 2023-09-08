import {Component} from 'react'
import Context from '../../context/Context'

import Header from '../Header'
import Sidebar from '../Sidebar'

import './index.css'
import {
  Button,
  OutlineButton,
  HomeContainer,
  HomeContent,
  VideoSection,
} from './styledComponent'

class Trending extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeContainer dark={isDarkTheme}>
              <Header />
              <HomeContent>
                <Sidebar />
                <VideoSection>h</VideoSection>
              </HomeContent>
            </HomeContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Trending
