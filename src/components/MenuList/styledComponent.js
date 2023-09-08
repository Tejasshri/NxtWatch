import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export

export const SidebarListContainer = styled.ul`
  margin-top: 0px;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`

export const SidebarListItem = styled.li`
  padding: 5px 20px;
  background-color: ${props => props.isActive && props.dark && '#475569'};
  background-color: ${props => props.isActive && !props.dark && '#e2e8f0'};
`

export const LinkParagraph = styled.p`
  margin-left: 14px;
  font-size: 18px;
`
