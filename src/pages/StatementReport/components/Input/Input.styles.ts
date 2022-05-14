import styled from '@emotion/styled'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 500px;
  background-color: ${({ theme }) => theme.color.grays[4]};
  border-radius: ${({ theme }) => theme.radius[1]};
  padding: 10px;
`

export const Input = styled.input`
  border: none;
  background: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`
