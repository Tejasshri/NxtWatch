import Context from '../../context/Context'

import './index.css'
import {Button} from './styledComponent'

const FailureView = props => {
  const getFailureView = value => {
    const {isDarkTheme} = value
    const failureViewImage = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    const failureViewClassName = isDarkTheme
      ? 'failure-view dark'
      : 'failure-view'

    const {retry} = props
    return (
      <div className={failureViewClassName}>
        <img
          className="failure-view-image"
          alt="failure view"
          src={failureViewImage}
        />
        <h1 className="failure-view-heading">Oops! Something Went Wrong</h1>
        <p>
          We are having some trouble to complete your request.
          <br />
          Please try again.
        </p>
        <Button type="button" onClick={() => retry()}>
          Retry
        </Button>
      </div>
    )
  }
  return <Context.Consumer>{value => getFailureView(value)}</Context.Consumer>
}

export default FailureView
