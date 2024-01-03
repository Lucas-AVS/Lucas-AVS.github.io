import ImageBg from '../../assets/bg-about-me.png'
import {
  Line,
  StyledBackgroundImage,
  StyledContainer,
  StyledContent,
  StyledTopic,
  StyledTopics,
} from './styles'

export default function Summary() {
  return (
    <StyledContainer>
      <StyledBackgroundImage src={ImageBg} alt="" />
      <StyledContent>
        <h1>ABOUT ME</h1>
        <Line></Line>
        <StyledTopics>
          <StyledTopic>
            <h2>I`m Lucas de Alencar Vieira da Silva</h2>
            <h2>Front-end Developer</h2>
          </StyledTopic>
          <StyledTopic>
            <h2>Passionate technology enthusiast</h2>
            <h2>Always eager to learn and create</h2>
            <h2>Verbal communication skills</h2>
          </StyledTopic>
        </StyledTopics>
      </StyledContent>
    </StyledContainer>
  )
}
