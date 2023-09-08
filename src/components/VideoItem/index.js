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
      console.log(props)
      return (
        <VideoListItem>
          <Link to={`/videos/${id}`} className="video-link">
            <ThumbImage src={thumbnailUrl} />
            <VideoDetailsContainer>
              <ProfileImage src={profileImageUrl} />
              <VideoDetailsBox>
                <VideoTitle>{title}</VideoTitle>
                <ChannelName>{name}</ChannelName>
                <ViewAndTimeBox>
                  <Views>{viewCount} views</Views>
                  <Time>{formatDistanceToNow(new Date(publishedAt))} ago</Time>
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
