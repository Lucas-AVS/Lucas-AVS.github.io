import AvsLogo from '../../assets/avs-icon-nobg.svg'
import { NavLink, StyledHeader, StyledImage, StyledNav } from './styles'

export default function Header() {
  return (
    <StyledHeader>
      <StyledImage src={AvsLogo} alt="" />
      <StyledNav>
        <NavLink to="/">about</NavLink>
        <NavLink to="/">skills</NavLink>
        <NavLink to="/">projects</NavLink>
        <NavLink to="/">contact</NavLink>
      </StyledNav>
    </StyledHeader>
  )
}
