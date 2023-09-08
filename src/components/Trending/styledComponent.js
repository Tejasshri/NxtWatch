import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  color: ${props => (props.outline ? '#3b82f6' : '#ffffff')};
  border: 2px solid #3b82f6;
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
`
