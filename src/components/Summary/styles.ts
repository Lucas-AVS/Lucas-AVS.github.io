import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: relative;
  text-align: center;
  color: ${props => props.theme['black']};
`

export const StyledBackgroundImage = styled.img`
  max-height: 740px;
  width: 100%;
  object-fit: cover;
`
export const StyledContent = styled.div`
  color: ${props => props.theme['black']};
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;

  & h1 {
    font-size: 4rem;
    font-weight: bold;
  }
`
export const Line = styled.hr`
  height: 3px;
  width: 30rem;
  margin: auto;
  font-size: 3.75rem;
  background: black;
`

export const StyledTopics = styled.div`
  margin-top: 1.65rem;
  display: flex;
  justify-content: space-around;
`

export const StyledTopic = styled.div`
  ${props => props.theme['black']};
  -space: nowrap;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
  & h2 {
    font-size: 1.25rem;
    font-weight: normal;
  }
`
