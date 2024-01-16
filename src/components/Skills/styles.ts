import styled from 'styled-components'

export const SkillsContainer = styled.div`
  margin: 50px 195px;
  display: flex;
  flex-direction: column;
  text-align: start;

  h2 {
    color: ${props => props.theme['black']};
    font-size: 1.5rem;
    font-weight: bold;
    text-align: start;
  }
`

export const SkillsGrid = styled.div`
  margin: 24px auto 0 75px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  grid-auto-rows: auto;
  align-items: center;
`

export const SkillIcon = styled.div`
  position: relative;
  display: inline-block;

  > svg {
    color: ${props => props.theme['black']};
    height: 60px;
    width: 60px;
    transition: transform 0.3s, color 0.3s;

    &:hover {
      transform: scale(1.2);
      color: ${props => props.theme['orange-500']};
      cursor: pointer;
    }
  }

  &:hover::after {
    content: attr(data-skill);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.theme['orange-500']};
    color: ${props => props.theme['white']};
    padding: 5px;
    border-radius: 5px;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s, visibility 0.3s;
  }

  &::after {
    content: attr(data-skill);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.theme['black']};
    color: ${props => props.theme['white']};
    padding: 5px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }
`
