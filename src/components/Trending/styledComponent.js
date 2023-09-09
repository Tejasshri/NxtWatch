import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export

export const Frame = styled.div`
  height: 100vh;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`

export const MainBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`

export const TrendingVideoBody = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  height: 90vh;
`

export const TrendingVideoHeader = styled.div`
  width: 100%;
  background-color: ${props =>
    props.dark ? 'rgba(255,255,255,.05)' : '#d0d0d0'};
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: 25px;
  border: 2px solid
    ${props => (props.dark ? 'rgba(255,255,255,.1)' : '#d0d0d0')}; ;
`

export const LogoContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => (props.dark ? '#404040' : '#d9f0f0')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoHeading = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
  color: ${props => (props.dark ? '#f0f0f0' : '#404040')};
`

export const VideoListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  background-color:{props => (props.dark? '#0f0f0f': '#f0f0f0')};
`

// eslint-disable-next-line import/prefer-default-export

export const NotFoundSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  height: 100vh;
`

export const NotFoundContent = styled.div`
  flex-grow: 1;
  display: flex;
`

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NotFoundImage = styled.img`
  height: 200px;
`

export const NotFoundHeading = styled.h1``

export const NotFoundDescription = styled.p``
