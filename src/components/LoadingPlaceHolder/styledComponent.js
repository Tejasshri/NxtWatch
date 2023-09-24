import styled, {keyframes} from 'styled-components'

const dimmer = keyframes`
  100%{
    opacity: .6;
  }
`

export const VideoListItem = styled.li`
  width: 30%;
  margin-bottom: 20px;
  color: grey;
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`

export const PlaceholderThumb = styled.div`
  width: 100%;
  margin-bottom: 10px;
  height: 170px;
  background-color: grey;
  border-radius: 4px;
  animation: ${dimmer} 2s linear infinite;
`

export const VideoDetailsContainer = styled.div`
  width: 100%;
  display: flex;
`

export const PlaceholderProfileImage = styled.div`
  height: 50px;
  width: 50px;
  background-color: grey;
  border-radius: 50%;
  animation: ${dimmer} 2s linear infinite;
`

export const PlaceholderVideoDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  flex-grow: 1;
`

export const PlaceholderVideoTitle = styled.div`
  font-weight: 500;
  font-size: 17px;
  background-color: grey;
  height: 30px;
  border-radius: 4px;
  animation: ${dimmer} 2s linear infinite;
`

export const ChannelName = styled.p`
  font-weight: 400;
  background-color: grey;
  margin: 0;
  font-size: 15px;
  margin: 5px 0;
  width: 60px;
  border-radius: 4px;
  text-align: center;
  animation: ${dimmer} 2s linear infinite;
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
