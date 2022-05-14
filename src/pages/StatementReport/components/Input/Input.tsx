import { InputContainer, Input as StyledInput } from './Input.styles'

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <InputContainer>
      <div style={{ margin: 15 }}>x</div>
      <StyledInput {...props} />
    </InputContainer>
  )
}
