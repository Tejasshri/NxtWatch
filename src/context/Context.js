import {createContext} from 'react'

const Context = createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
  likedVideoList: [],
  onToggleLike: () => {},
  unlikedVideoList: [],
  onToggleUnlike: () => {},
  savedVideos: [],
  onVideoSave: () => {},
})

export default Context
