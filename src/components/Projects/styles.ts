import styled, { keyframes } from 'styled-components'

export const ProjectsContainer = styled.div`
  margin: 0px 195px;
  text-align: start;
  color: ${props => props.theme['black']};
  /* background-color: orange; */

  & h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const StyledProjects = styled.div`
  margin: 24px 85px 0;
  display: flex;
  justify-content: space-between;
  gap: 58px;
`
export const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & p {
    font-size: 1.25rem;
    color: ${props => props.theme['black']};
    font-weight: 400;
  }
`
export const ProjectLink = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
`

export const StyledPreview = styled.img`
  height: 200px;
  width: 350px;
  object-fit: cover;
  border-style: solid;
  border-width: 3px;
  border-color: ${props => props.theme['black']};
  border-radius: 10px;
  box-sizing: border-box;
  opacity: 0.9;

  &:hover {
    border-color: ${props => props.theme['orange-500']};
    border-width: 3px;
    transition: 0.2s;
    cursor: pointer;
    opacity: 1;
  }
`
export const ProjectButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

export const ProjectButton = styled.button`
  font-size: 1.25rem;
  color: ${props => props.theme['black']};
  height: 95px;
  width: 95px;
  background-color: ${props => props.theme['white']};
  border-style: solid;
  border-width: 2px;
  border-color: ${props => props.theme['orange-500']};
  border-radius: 999999px;
  box-sizing: border-box;

  &:hover {
    background-color: ${props => props.theme['orange-500']};
    cursor: pointer;
    height: 100px;
    width: 100px;
    margin: -2.5px;
    transform: scale(1.1);
    animation: ${scaleAnimation} 1.5s alternate infinite;
  }
`
