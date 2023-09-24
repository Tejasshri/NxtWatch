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
import LoadingPlaceHolder from '../LoadingPlaceHolder'

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
    let response = {}
    try {
      response = await fetch(apiUrl, option)
    } catch (error) {
      console.log('Error')
      setTimeout(this.getVideosList, 10000)
      return
    }

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
    <AdsContainer data-testid="banner">
      <AdsLogoContainer>
        <AdsLogo
          alt="nxt watch logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <CloseBannerButton
          type="button"
          onClick={this.onRemoveAdd}
          data-testid="close"
        >
          <MdClose size={30} />
        </CloseBannerButton>
      </AdsLogoContainer>

      <AdsDescription>
        Buy Nxt Watch Premium prepaid plans with UPI
      </AdsDescription>

      <Button outline>GET IT NOW</Button>
    </AdsContainer>
  )

  renderLoadingPlaceholder = () => {
    const sampleList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
      <>
        <VideoListContainer>
          {sampleList.map(each => (
            <LoadingPlaceHolder key={each} />
          ))}
        </VideoListContainer>
        <LoadingView />
      </>
    )
  }

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

  renderView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.inprogress:
        return this.renderLoadingPlaceholder()
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
          value={searchInput}
        />
        <SearchButton
          dark={isDarkTheme}
          type="button"
          onClick={this.onClickSearch}
          data-testid="searchButton"
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
            <HomeContainer dark={isDarkTheme} data-testid="home">
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
