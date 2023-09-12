import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import Context from './context/Context'

import './App.css'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import GamingRoute from './components/GamingRoute'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    likedVideoList: [],
    savedVideos: [],
    unlikedVideoList: [],
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onToggleLike = videoId => {
    const {likedVideoList} = this.state
    const isExist = likedVideoList.includes(videoId)
    console.log(likedVideoList)
    console.log(isExist)
    if (isExist) {
      this.setState(prevState => ({
        likedVideoList: prevState.likedVideoList.filter(
          each => each !== videoId,
        ),
      }))
    } else {
      this.setState(prevState => ({
        likedVideoList: [...prevState.likedVideoList, videoId],
        unlikedVideoList: prevState.unlikedVideoList.filter(
          each => each.id === videoId,
        ),
      }))
    }
  }

  onToggleUnlike = videoId => {
    const {unlikedVideoList} = this.state
    const isExist = unlikedVideoList.includes(videoId)
    console.log(unlikedVideoList)
    console.log(isExist)
    if (isExist) {
      this.setState(prevState => ({
        unlikedVideoList: prevState.unlikedVideoList.filter(
          each => each !== videoId,
        ),
      }))
    } else {
      this.setState(prevState => ({
        unlikedVideoList: [...prevState.unlikedVideoList, videoId],
        likedVideoList: prevState.likedVideoList.filter(
          each => each.id === videoId,
        ),
      }))
    }
  }

  onVideoSave = videoData => {
    const {savedVideos} = this.state
    const isExist = savedVideos.some(each => each.id === videoData.id)
    if (isExist) {
      const filteredList = savedVideos.filter(each => each.id !== videoData.id)
      this.setState({savedVideos: filteredList})
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videoData],
      }))
    }
  }

  render() {
    const {
      isDarkTheme,
      unlikedVideoList,
      likedVideoList,
      videosList,
      savedVideos,
    } = this.state
    return (
      <Context.Provider
        value={{
          isDarkTheme,
          onChangeTheme: this.onChangeTheme,
          savedVideos,
          likedVideoList,
          unlikedVideoList,
          onToggleLike: this.onToggleLike,
          onToggleUnlike: this.onToggleUnlike,
          onVideoSave: this.onVideoSave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
