import { StyledContacts, StyledRedirect } from './styles'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { ImMail4 } from 'react-icons/im'

export default function Contact() {
  return (
    <StyledContacts>
      <h2>Contact me!</h2>
      <StyledRedirect href="https://www.github.com/Lucas-AVS" target="_blank">
        <FaGithub />
      </StyledRedirect>
      <StyledRedirect
        href="https://www.linkedin.com/in/lucas-avs/"
        target="_blank"
      >
        <FaLinkedin />
      </StyledRedirect>
      <StyledRedirect href="mailto:">
        <ImMail4 />
      </StyledRedirect>
    </StyledContacts>
  )
}
