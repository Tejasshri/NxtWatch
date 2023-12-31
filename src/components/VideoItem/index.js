import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import Context from '../../context/Context'

import './index.css'
import {
  VideoListItem,
  ThumbImage,
  VideoDetailsContainer,
  ProfileImage,
  VideoDetailsBox,
  VideoTitle,
  ChannelName,
  ViewAndTimeBox,
  Views,
  Time,
} from './styledComponent'

const VideoItem = props => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videoDetails} = props
      const {
        channel,
        id,
        viewCount,
        title,
        thumbnailUrl,
        publishedAt,
      } = videoDetails
      const {name, profileImageUrl} = channel
      console.log(publishedAt)
      const passedTime = formatDistanceToNow(new Date(publishedAt))
        .split(' ')
        .slice(1)
        .join(' ')
      return (
        <VideoListItem>
          <Link to={`/videos/${id}`} className="video-link">
            <ThumbImage alt="video thumbnail" src={thumbnailUrl} />
            <VideoDetailsContainer>
              <ProfileImage alt="channel logo" src={profileImageUrl} />
              <VideoDetailsBox>
                <VideoTitle dark={isDarkTheme}>{title}</VideoTitle>
                <ChannelName dark={isDarkTheme}>{name}</ChannelName>
                <ViewAndTimeBox dark={isDarkTheme}>
                  <Views>{viewCount} views</Views>
                  <Time>{passedTime} ago</Time>
                </ViewAndTimeBox>
              </VideoDetailsBox>
            </VideoDetailsContainer>
          </Link>
        </VideoListItem>
      )
    }}
  </Context.Consumer>
)

export default VideoItem
