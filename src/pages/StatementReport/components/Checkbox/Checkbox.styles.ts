import styled from '@emotion/styled'

type LabelProps = {
  checked: boolean
}

export const Label = styled.label<LabelProps>`
  padding: 5px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.color.main.primary : 'transparent'};
  color: ${({ checked, theme }) =>
    checked ? theme.color.grays[0] : theme.color.main.primary};

  &:hover {
    background-color: ${({ theme, checked }) =>
      checked ? theme.color.main.primary : theme.color.blues[1]};
  }
`

export const Input = styled.input`
  appearance: none;
`
