import styled from 'styled-components'

export const GamingVideoListItem = styled.li`
  width: 30%;
  margin-bottom: 40px;
`

export const ThumbImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const GamingVideoDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-left: 0px;
  @media (max-width: 576px) {
    margin-left: 0px;
  }
`

export const ProfileImage = styled.img`
  height: 50px;
`

export const GamingVideoDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ;
`

export const GamingVideoTitle = styled.p`
  font-weight: 600;
  color: ${props => (props.dark ? '#f0f0f0' : 'rgba(0, 0, 0, 0.7)')};
  margin: 0;
  font-size: 18px;
`

export const ChannelName = styled.p`
  font-weight: 400;
  color: ${props => (props.dark ? '#aabbcc' : 'rgba(0, 0, 0, 0.5)')};
  margin: 0;
  font-size: 26px;
  margin: 20px 0px;
  font-weight: 500;
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
