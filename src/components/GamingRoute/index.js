import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsFire} from 'react-icons/bs'

import Context from '../../context/Context'

import Header from '../Header'
import Sidebar from '../Sidebar'
import SavedVideoItem from '../GamingVideoItem'

import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

import './index.css'
import {
  Frame,
  MainBody,
  GamingVideoBody,
  GamingVideoHeader,
  LogoContainer,
  LogoHeading,
  VideoListContainer,
  NotFoundSection,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponent'

const apiStatusList = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inprogress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusList.initial,
    terndingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusList.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const option = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, option)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(each => ({
        id: each.id,
        viewCount: each.view_count,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
      }))

      this.setState({
        apiStatus: apiStatusList.success,
        trendingVideosList: updatedData,
      })
      console.log(updatedData)
    } else {
      this.setState({apiStatus: apiStatusList.failure})
    }
  }

  renderTrendingVideoSection = value => {
    const {isDarkTheme} = value
    const {trendingVideosList} = this.state

    return (
      <>
        <GamingVideoHeader dark={isDarkTheme}>
          <LogoContainer dark={isDarkTheme}>
            <BsFire size={30} color="red" />
          </LogoContainer>
          <LogoHeading dark={isDarkTheme}>Gaming</LogoHeading>
        </GamingVideoHeader>
        <VideoListContainer>
          {trendingVideosList.map(each => (
            <SavedVideoItem videoDetails={each} key={each.id} />
          ))}
        </VideoListContainer>
      </>
    )
  }

  renderView = value => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.inprogress:
        return <LoadingView />
      case apiStatusList.success:
        return this.renderTrendingVideoSection(value)
      case apiStatusList.failure:
        return <FailureView retry={this.getTrendingVideos} />
      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <Frame dark={isDarkTheme} data-testid="gaming">
              <Header />
              <MainBody>
                <Sidebar />
                <GamingVideoBody>{this.renderView(value)}</GamingVideoBody>
              </MainBody>
            </Frame>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Trending
