import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiSolidLike, BiLike, BiSolidDislike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd, MdPlaylistAddCheck} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'

import Context from '../../context/Context'
import Header from '../Header'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

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
  ChannelDetails,
  ProfileImage,
  ChannelData,
  ChannelName,
  ChannelSubscribers,
  VideoDescription,
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

  renderVideoAndOther = value => {
    const {
      isDarkTheme,
      onToggleLike,
      onToggleUnlike,
      onVideoSave,
      savedVideos,
      unlikedVideoList,
      likedVideoList,
    } = value
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

    const toggleSave = () => onVideoSave(videoDetails)
    const toggleLike = () => onToggleLike(id)
    const toggleUnlike = () => onToggleUnlike(id)

    const isVideoLiked = likedVideoList.includes(id)
    const isVideoUnliked = unlikedVideoList.includes(id)
    const isVideoSaved = savedVideos.some(each => each.id === id)

    return (
      <VideoItemSection>
        <VideoContainer>
          <ReactPlayer url={videoUrl} width="100%" height="100%" />
          <VideoTitle dark={isDarkTheme}>{title}</VideoTitle>
          <VideoDetailsBox>
            <TimeAndViewBox>
              <Views>{viewCount} views</Views>
              <Time>
                {formatDistanceToNow(new Date(publishedAt), {addSuffix: false})
                  .split(' ')
                  .slice(1)
                  .join(' ')}{' '}
                ago
              </Time>
            </TimeAndViewBox>
            <ButtonBox>
              <VideoButton
                dark={isDarkTheme}
                type="button"
                onClick={toggleLike}
              >
                {isVideoLiked ? (
                  <BiSolidLike
                    size={24}
                    color="#2563eb" /* {isDarkTheme ? 'white' : 'rgba(0,0,0,.7)'} */
                    className="video-icon"
                  />
                ) : (
                  <BiLike size={24} color="#64748b" className="video-icon" />
                )}
                Like
              </VideoButton>
              <VideoButton
                dark={isDarkTheme}
                type="button"
                onClick={toggleUnlike}
              >
                {isVideoUnliked ? (
                  <BiSolidDislike
                    size={24}
                    className="video-icon"
                    color="#2563eb"
                  />
                ) : (
                  <BiDislike size={24} className="video-icon" color="#64748b" />
                )}
                Dislike
              </VideoButton>
              <VideoButton
                dark={isDarkTheme}
                type="button"
                onClick={toggleSave}
              >
                {isVideoSaved ? (
                  <MdPlaylistAddCheck
                    size={34}
                    className="video-icon"
                    color="#2563eb"
                  />
                ) : (
                  <MdPlaylistAdd
                    size={34}
                    className="video-icon"
                    color="#64748b"
                  />
                )}
                Save
              </VideoButton>
            </ButtonBox>
          </VideoDetailsBox>
          <hr />
          <ChannelDetails>
            <ProfileImage alt={channel.name} src={channel.profileImageUrl} />
            <ChannelData>
              <ChannelName dark={isDarkTheme}>{channel.name}</ChannelName>
              <ChannelSubscribers dark={isDarkTheme}>
                {channel.subscriberCount} subscribers
              </ChannelSubscribers>
              <VideoDescription dark={isDarkTheme}>
                {description}
              </VideoDescription>
            </ChannelData>
          </ChannelDetails>
        </VideoContainer>
      </VideoItemSection>
    )
  }

  renderView = value => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.inprogress:
        return <LoadingView />
      case apiStatusList.failure:
        return <FailureView retry={this.getVideoDetails} />
      case apiStatusList.success:
        return this.renderVideoAndOther(value)
      default:
        return null
    }
  }

  renderVideoRoute = () => (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value

        /* const {name, profileImageUrl, subscriberCount} = channel */

        return (
          <VideoRouteContainer
            dark={isDarkTheme}
            data-testid="videoItemDetails"
          >
            <Header />
            <RouteBody>
              <Sidebar />
              {this.renderView(value)}
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
