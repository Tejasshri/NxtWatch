import {Component} from 'react'
import {BsFire} from 'react-icons/bs'

import Context from '../../context/Context'

import Header from '../Header'
import Sidebar from '../Sidebar'
import SavedVideoItem from '../SavedVideoItem'

import './index.css'
import {
  Frame,
  MainBody,
  SavedVideoBody,
  SavedVideoHeader,
  LogoContainer,
  LogoHeading,
  VideoListContainer,
  NotFoundContainer,
  NotFoundContent,
  NotFoundSection,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponent'

class SavedVideo extends Component {
  renderNoVideoView = value => {
    const {isDarkTheme} = value
    const noVideoImageUrl = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
    return (
      <NotFoundSection dark={isDarkTheme}>
        <NotFoundImage alt="no saved videos" src={noVideoImageUrl} />
        <NotFoundHeading>No saved video found</NotFoundHeading>
        <NotFoundDescription>
          You can save your videos while watching them
        </NotFoundDescription>
      </NotFoundSection>
    )
  }

  renderSavedVideoSection = value => {
    const {savedVideos, isDarkTheme} = value

    return (
      <>
        <SavedVideoHeader dark={isDarkTheme}>
          <LogoContainer dark={isDarkTheme}>
            <BsFire size={30} color="red" />
          </LogoContainer>
          <LogoHeading dark={isDarkTheme}>Saved Videos</LogoHeading>
        </SavedVideoHeader>
        <VideoListContainer>
          {savedVideos.map(each => (
            <SavedVideoItem videoDetails={each} key={each.id} />
          ))}
        </VideoListContainer>
      </>
    )
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme, savedVideos} = value

          return (
            <Frame dark={isDarkTheme} data-testid="savedVideos">
              <Header />
              <MainBody>
                <Sidebar />
                <SavedVideoBody>
                  {savedVideos.length !== 0
                    ? this.renderSavedVideoSection(value)
                    : this.renderNoVideoView(value)}
                </SavedVideoBody>
              </MainBody>
            </Frame>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default SavedVideo
