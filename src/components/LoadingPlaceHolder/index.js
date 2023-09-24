import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import Context from '../../context/Context'

import './index.css'
import {
  VideoListItem,
  PlaceholderThumb,
  VideoDetailsContainer,
  PlaceholderProfileImage,
  PlaceholderVideoDetailsBox,
  PlaceholderVideoTitle,
  ChannelName,
  ViewAndTimeBox,
  Views,
  Time,
} from './styledComponent'

const VideoItem = props => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <VideoListItem>
          <PlaceholderThumb>T</PlaceholderThumb>
          <VideoDetailsContainer>
            <PlaceholderProfileImage>.</PlaceholderProfileImage>
            <PlaceholderVideoDetailsBox>
              <PlaceholderVideoTitle dark={isDarkTheme}>
                T
              </PlaceholderVideoTitle>
              <ChannelName dark={isDarkTheme}>T</ChannelName>
              <ViewAndTimeBox dark={isDarkTheme}>
                <Views>.</Views>
                <Time>.</Time>
              </ViewAndTimeBox>
            </PlaceholderVideoDetailsBox>
          </VideoDetailsContainer>
        </VideoListItem>
      )
    }}
  </Context.Consumer>
)

export default VideoItem
