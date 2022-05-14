import styled from '@emotion/styled'

type LabelProps = {
  checked: boolean
}

export const Label = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  height: 20px;

  background-color: ${({ checked, theme }) =>
    checked ? theme.color.main.primary : 'transparent'};
  color: ${({ checked, theme }) =>
    checked ? theme.color.grays[0] : theme.color.main.primary};
  border-radius: ${({ theme }) => theme.radius[2]};

  &:hover {
    background-color: ${({ theme, checked }) =>
      checked ? theme.color.main.primary : theme.color.blues[1]};
  }

  span {
    margin-left: 7px;
  }
`

export const Input = styled.input`
  appearance: none;
`
