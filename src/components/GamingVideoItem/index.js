import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import Context from '../../context/Context'

import './index.css'
import {
  GamingVideoListItem,
  ThumbImage,
  GamingVideoDetailsContainer,
  GamingVideoDetailsBox,
  GamingVideoTitle,
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
      return (
        <GamingVideoListItem>
          <Link to={`/videos/${id}`} className="gaming-video-link">
            <ThumbImage src={thumbnailUrl} />
            <GamingVideoDetailsContainer>
              <GamingVideoDetailsBox>
                <GamingVideoTitle dark={isDarkTheme}>{title}</GamingVideoTitle>
                <ViewAndTimeBox dark={isDarkTheme}>
                  <Views>{viewCount} Watching Worldwide</Views>
                </ViewAndTimeBox>
              </GamingVideoDetailsBox>
            </GamingVideoDetailsContainer>
          </Link>
        </GamingVideoListItem>
      )
    }}
  </Context.Consumer>
)

export default VideoItem
