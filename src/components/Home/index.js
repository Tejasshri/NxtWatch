import {Component} from 'react'
import Cookies from 'js-cookie'
import {MdClose} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'

import Context from '../../context/Context'

import Header from '../Header'
import Sidebar from '../Sidebar'
import LoadingView from '../LoadingView'
import VideoItem from '../VideoItem'

import './index.css'
import {
  HomeContainer,
  HomeContent,
  VideoSection,
  AdsContainer,
  AdsLogoContainer,
  AdsLogo,
  AdsDescription,
  Button,
  CloseBannerButton,
  SearchBox,
  SearchInput,
  SearchButton,
  VideoListContainer,
} from './styledComponent'
import {CompanyImage} from '../Sidebar/styledComponent'
import {OutlineButton} from '../Header/styledComponent'

const apiStatusList = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inprogress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusList.initial,
    videosList: [],
    showAds: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusList.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/all?search='
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, option)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        viewCount: each.view_count,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        publishedAt: each.published_at,
      }))

      this.setState({apiStatus: apiStatusList.success, videosList: updatedData})
      console.log(updatedData)
    } else {
      this.setState({apiStatus: apiStatusList.failure})
    }
  }

  onRemoveAdd = () => {
    this.setState({showAds: false})
  }

  renderAdsBanner = () => (
    <AdsContainer>
      <AdsLogoContainer>
        <AdsLogo
          alt=""
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <CloseBannerButton type="button" onClick={this.onRemoveAdd}>
          <MdClose size={30} />
        </CloseBannerButton>
      </AdsLogoContainer>

      <AdsDescription>
        Buy Nxt Watch Premium prepaid plans with UPI
      </AdsDescription>

      <Button outline>GET IT NOW</Button>
    </AdsContainer>
  )

  renderVideoSection = () => {
    const {videosList} = this.state
    return (
      <VideoListContainer>
        {videosList.map(each => (
          <VideoItem videoDetails={each} key={each.id} />
        ))}
      </VideoListContainer>
    )
  }

  renderView = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.inprogress:
        return <LoadingView />
      case apiStatusList.success:
        return this.renderVideoSection()
      default:
        return null
    }
  }

  renderSearchBox = isDarkTheme => {
    const {searchInput} = this.state
    return (
      <SearchBox dark={isDarkTheme}>
        <SearchInput dark={isDarkTheme} />
        <SearchButton dark={isDarkTheme}>
          <BsSearch size={20} />
        </SearchButton>
      </SearchBox>
    )
  }

  render() {
    const {showAds} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {apiStatus} = this.state
          console.log(apiStatus)

          return (
            <HomeContainer dark={isDarkTheme}>
              <Header />
              <HomeContent>
                <Sidebar />
                <VideoSection>
                  {showAds && this.renderAdsBanner()}
                  {this.renderSearchBox(isDarkTheme)}
                  {this.renderView(isDarkTheme)}
                </VideoSection>
              </HomeContent>
            </HomeContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
