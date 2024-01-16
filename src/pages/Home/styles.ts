import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { SlArrowDownCircle } from 'react-icons/sl'
import { SlArrowUpCircle } from 'react-icons/sl'

const float = keyframes`
 0% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
	transform: translatey(0px); 
    }
 50% { 
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
	transform: translatey(20px); 
    }
 100% { 
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
	transform: translatey(0px); 
    }
`
export const FirstSession = styled.div`
  background-color: ${props => props.theme['black']};
  height: 77vh;
`

export const SecondSession = styled.div`
  background-color: ${props => props.theme['white']};
  height: 77vh;
`

export const ArrowDownSession = styled.div`
  background-color: ${props => props.theme['back']};
  height: 14vh;
`
export const ArrowUpSession = styled.div`
  background-color: ${props => props.theme['white']};
  height: 14vh;
`
export const ArrowDownButton = styled(SlArrowDownCircle)`
  color: ${props => props.theme['orange-500']};
  height: 60px;
  width: 60px;
  margin: 37.8px auto;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);

  animation-name: ${float};
  animation-duration: 6s;
  animation-iteration-count: infinite;
  transition: color 0.2s, height 0.2s, width 0.2s;

  &:hover {
    color: ${props => props.theme['white']};
    height: 64px;
    width: 64px;
    transition: 0.2s;
    cursor: pointer;
  }
`
export const ArrowUpButton = styled(SlArrowUpCircle)`
  color: ${props => props.theme['orange-500']};
  height: 60px;
  width: 60px;
  margin: 34.8px auto;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  border-radius: 99999px;

  animation-name: ${float};
  animation-duration: 6s;
  animation-iteration-count: infinite;
  transition: color 0.2s, height 0.2s, width 0.2s;

  &:hover {
    color: ${props => props.theme['black']};
    height: 64px;
    width: 64px;
    transition: 0.2s;
    cursor: pointer;
  }
`

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`
