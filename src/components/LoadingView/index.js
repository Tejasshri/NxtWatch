import Loader from 'react-loader-spinner'
import './index.css'
import Context from '../../context/Context'

const LoadingView = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="loader-container" data-testid="loader">
          <Loader
            type="ThreeDots"
            color={isDarkTheme ? 'white' : 'rgba(0,0,0,.7)'}
            height="50"
            width="50"
          />
        </div>
      )
    }}
  </Context.Consumer>
)

export default LoadingView
