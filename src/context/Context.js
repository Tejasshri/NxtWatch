import {createContext} from 'react'

const Context = createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
})

export default Context
