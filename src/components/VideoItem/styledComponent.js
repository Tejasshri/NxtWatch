import styled from 'styled-components'

export const VideoListItem = styled.li`
  width: 30%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`

export const ThumbImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
`

export const VideoDetailsContainer = styled.div`
  width: 100%;
  display: flex;
`

export const ProfileImage = styled.img`
  height: 50px;
`

export const VideoDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const VideoTitle = styled.p`
  font-weight: 500;
  color: ${props => (props.dark ? '#f0f0f0' : 'rgba(0, 0, 0, 0.7)')};
  margin: 0;
  font-size: 17px;
`

export const ChannelName = styled.p`
  font-weight: 400;
  color: ${props => (props.dark ? '#aabbcc' : 'rgba(0, 0, 0, 0.5)')};
  margin: 0;
  font-size: 15px;
  margin: 5px 0;
`

export const ViewAndTimeBox = styled.div`
  display: flex;
  color: ${props => (props.dark ? '#aabbcc' : 'rgba(0, 0, 0, 0.5)')};
`

export const Views = styled.p`
  font-weight: 400;
  margin: 0;
  font-size: 15px;
`

export const Time = styled(Views)`
  margin-left: 15px;
`
