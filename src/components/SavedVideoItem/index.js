import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import Context from '../../context/Context'

import './index.css'
import {
  SavedVideoListItem,
  ThumbImage,
  VideoDetailsContainer,
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
        <SavedVideoListItem>
          <Link to={`/videos/${id}`} className="saved-video-link">
            <ThumbImage src={thumbnailUrl} />
            <VideoDetailsContainer>
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
        </SavedVideoListItem>
      )
    }}
  </Context.Consumer>
)

export default VideoItem
