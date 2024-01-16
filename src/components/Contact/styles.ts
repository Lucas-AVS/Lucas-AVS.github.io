import styled from 'styled-components'

export const StyledContacts = styled.div`
  margin: 45px auto;
  padding: 0 25px;
  gap: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    322.24deg,
    ${props => props.theme['white']},
    ${props => props.theme['orange-500']}
  );
  border-radius: 12px;

  height: 100px;
  width: 420px;
`

export const StyledRedirect = styled.a`
  > * {
    color: ${props => props.theme['black']};
    height: 84px;
    width: 84px;
  }
`
