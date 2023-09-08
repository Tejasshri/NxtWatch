import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const SidebarContainer = styled.div`
  width: 280px;
  flex-grow: grow;
  flex-shrink: 0;
  background-color: ${props => (props.dark ? '#272727' : '#f8fafc')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
  height: 100%;
`

export const ContactUsContainer = styled.div`
  color: ${props => (props.dark ? '#ffffff' : '#030303')};
  padding-left: 14px;
`

export const ContactUsHeading = styled.h1`
  font-size: 18px;
  font-weight: 500;
`

export const CompanyImage = styled.img`
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`

export const ContactsDescription = styled(ContactUsHeading)``
