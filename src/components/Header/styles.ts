import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
  z-index: 1;

  height: 9vh;
  background-color: ${props => props.theme['black']};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 190px;
`

export const StyledImage = styled.img`
  height: 65px;
  width: 73px;
`
export const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
`
export const NavLink = styled(Link)`
  font-size: 1.25rem;
  color: #f5f5f5;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme['orange-500']};
  }
`
