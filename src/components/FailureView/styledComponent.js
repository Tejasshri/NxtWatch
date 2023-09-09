import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  padding: 8px 15px;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  background-color: ${props => (props.outline ? 'transparent' : '#4f46e5')};
  color: ${props => (props.outline ? '#4f46e5' : '#ffffff')};
  border: 2px solid #4f46e5;
`
