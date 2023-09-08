import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import Context from './context/Context'

import './App.css'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme, activeRoute} = this.state
    console.log(activeRoute)
    return (
      <Context.Provider
        value={{
          isDarkTheme,
          onChangeTheme: this.onChangeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
