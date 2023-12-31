import Context from '../../context/Context'

import './index.css'
import {Button} from './styledComponent'

const NoSearchResult = props => {
  const getNoSearchResultView = value => {
    const {isDarkTheme} = value
    const emptyViewImage =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png '

    const emptyViewClassName = isDarkTheme ? 'empty-view dark' : 'empty-view'

    const {retry} = props
    return (
      <div className={emptyViewClassName}>
        <img alt="no videos" src={emptyViewImage} />
        <h1>No Search results found</h1>
        <p>Try different key words or remove search filter.</p>
        <Button type="button" onClick={() => retry()}>
          Retry
        </Button>
      </div>
    )
  }
  return (
    <Context.Consumer>{value => getNoSearchResultView(value)}</Context.Consumer>
  )
}

export default NoSearchResult
