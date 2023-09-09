import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const VideoRouteContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
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
  justify-content: ;
  align-items: center;
  color: grey !important;
  flex-wrap: wrap;
`

export const TimeAndViewBox = styled.div`
  display: flex;
  margin-right: auto;
`

export const Views = styled.p`
  font-weight: 500;
`

export const Time = styled.p`
  margin-left: 10px;
  font-weight: 500;
`

export const ButtonBox = styled.div`
  display: flex;
  color: ${props => (props.dark ? 'white' : 'rgba(0,0,0,.7)')};
  }
`

export const VideoButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  font-size: 18px;
  color: ${props => (props.dark ? 'white' : 'rgba(0,0,0,.7)')};
`

export const ChannelDetails = styled.div`
  display: flex;
`

export const ProfileImage = styled.img`
  height: 50px;
`

export const ChannelData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const ChannelName = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  color: ${props => (props.dark ? 'white' : 'rgba(0,0,0,.7)')};
`

export const ChannelSubscribers = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: ${props => (props.dark ? 'white' : 'rgba(0,0,0,.7)')};
`
export const VideoDescription = styled.p`
  font-size: 17px;
  font-weight: 500;
  margin: 30px 0;
  color: ${props => (props.dark ? 'white' : 'rgba(0,0,0,.7)')};
`
