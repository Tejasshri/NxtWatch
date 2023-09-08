import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  padding: 8px 15px;
  border-radius: 0px;
  font-weight: 400;
  font-size: 16px;
  background-color: ${props => (props.outline ? 'transparent' : 'grey')};
  color: ${props => (props.outline ? 'grey' : '#ffffff')};
  border: 2px solid grey;
`

export const OutlineButton = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  background-color: transparent;
  color: ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  border: 2px solid ${props => (props.dark ? '#ffffff' : '#3b82f6')};
`

export const HomeContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`

export const HomeContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`

export const VideoSection = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  height: 90vh;
`

export const AdsContainer = styled.div`
  height: 300px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  padding: 30px;
`

export const AdsLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AdsLogo = styled.img`
  height: 50px;
`

export const AdsDescription = styled.p`
  font-weight: 500;
  font-size: 18px;
`

export const CloseBannerButton = styled.button`
  background-color: transparent;
  border: 0px solid red;
  align-items: flex-start;
  cursor: pointer;
`

export const SearchBox = styled.div`
  max-width: 400px;
  display: flex;
  align-items: center;
  margin: 15px 0 0 15px;
  border: 2px solid ${props => (props.dark ? '#4f4f4f' : 'grey')};
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SearchInput = styled.input`
  flex-grow: 1;
  background-color: transparent;
  height: 40px;
  border: 0;
  padding: 10px;
  font-size: 20px;
  outline: none;
`

export const SearchButton = styled.button`
  background-color: ${props => (props.dark ? '#4f4f4f' : '#d1d1d1')};
  height: 42px;
  border: 0;
  width: 50px;
`

export const VideoListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  background-color: #f0f0f0;
`
