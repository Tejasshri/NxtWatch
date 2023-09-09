import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiSolidLike, BiLike, BiSolidDislike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'

import Context from '../../context/Context'
import Header from '../Header'

import './index.css'
import {
  VideoRouteContainer,
  RouteBody,
  VideoItemSection,
  VideoContainer,
  VideoTitle,
  VideoDetailsBox,
  Views,
  Time,
  ButtonBox,
  VideoButton,
  TimeAndViewBox,
} from './styledComponent'
import Sidebar from '../Sidebar'

const apiStatusList = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inprogress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusList.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusList.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const option = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, option)
    if (response.ok) {
      const data = await response.json()

      const updatedData = {
        videoDetails: {
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
          id: data.video_details.id,
          title: data.video_details.title,
          description: data.video_details.description,
          publishedAt: data.video_details.published_at,
          thumbnailUrl: data.video_details.thumbnail_url,
          videoUrl: data.video_details.video_url,
          viewCount: data.video_details.view_count,
        },
      }
      this.setState({
        videoDetails: updatedData.videoDetails,
        apiStatus: apiStatusList.success,
      })
    } else {
      this.setState({apiStatus: apiStatusList.failure})
    }
  }

  renderVideoRoute = () => (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videoDetails} = this.state
        const {
          channel,
          id,
          description,
          publishedAt,
          thumbnailUrl,
          videoUrl,
          viewCount,
          title,
        } = videoDetails
        return (
          <VideoRouteContainer dark={isDarkTheme}>
            <Header />
            <RouteBody>
              <Sidebar />
              <VideoItemSection>
                <VideoContainer>
                  <ReactPlayer url={videoUrl} width="100%" height="100%" />
                  <VideoTitle dark={isDarkTheme}>{title}</VideoTitle>
                  <VideoDetailsBox>
                    <TimeAndViewBox>
                      <Views>{viewCount} views</Views>
                      <Time>{formatDistanceToNow(new Date(publishedAt))}</Time>
                    </TimeAndViewBox>
                    <ButtonBox>
                      <VideoButton>
                        <BiLike size={24} className="video-icon" />
                        Like
                      </VideoButton>
                      <VideoButton>
                        <BiDislike size={24} className="video-icon" />
                        Dislike
                      </VideoButton>
                      <VideoButton>
                        <MdPlaylistAdd size={24} className="video-icon" />
                        Save
                      </VideoButton>
                    </ButtonBox>
                  </VideoDetailsBox>
                  <hr />
                </VideoContainer>
              </VideoItemSection>
            </RouteBody>
          </VideoRouteContainer>
        )
      }}
    </Context.Consumer>
  )

  render() {
    return this.renderVideoRoute()
  }
}

export default VideoItemDetails
