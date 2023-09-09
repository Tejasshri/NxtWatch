import {Component} from 'react'
import Cookies from 'js-cookie'
import {MdClose} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'

import Context from '../../context/Context'

import Header from '../Header'
import Sidebar from '../Sidebar'
import LoadingView from '../LoadingView'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'
import NoSearchResult from '../NoSearchResult'

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
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        {videosList.length === 0 ? (
          <NoSearchResult retry={this.onClickSearch} />
        ) : (
          videosList.map(each => (
            <VideoItem videoDetails={each} key={each.id} />
          ))
        )}
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
      case apiStatusList.failure:
        return <FailureView retry={this.onClickSearch} />
      default:
        return null
    }
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterSearch = event => {
    if (event.key === 'Enter') {
      this.getVideosList()
    }
  }

  onClickSearch = () => {
    this.getVideosList()
  }

  renderSearchBox = isDarkTheme => {
    const {searchInput} = this.state
    return (
      <SearchBox dark={isDarkTheme}>
        <SearchInput
          dark={isDarkTheme}
          type="search"
          onChange={this.onChangeSearch}
          onKeyDown={this.onEnterSearch}
        />
        <SearchButton
          dark={isDarkTheme}
          type="button"
          onClick={this.onClickSearch}
        >
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