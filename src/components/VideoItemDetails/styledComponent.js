import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const VideoRouteContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
`
export const RouteBody = styled.div`
  flex-grow: 1;
  display: flex;
`

export const VideoItemSection = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow: auto;
`

export const VideoContainer = styled.div`
  height: 500px;
  width: 100%;
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 400px) {
    height: 200px;
  }
`

export const VideoTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: ${props => (props.dark ? 'white' : 'black')};
`

export const VideoDetailsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: grey !important;
`

export const TimeAndViewBox = styled.div`
  display: flex;
`

export const Views = styled.p``

export const Time = styled.p`
  margin-left: 10px;
`

export const ButtonBox = styled.div`
  display: flex;
`

export const VideoButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  font-size: 18px;
`
