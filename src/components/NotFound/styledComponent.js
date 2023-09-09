import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const NotFoundContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`

export const NotFoundContent = styled.div`
  flex-grow: 1;
  display: flex;
`

export const NotFoundSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`

export const NotFoundImage = styled.img`
  height: 200px;
`

export const NotFoundHeading = styled.h1``

export const NotFoundDescription = styled.p``
