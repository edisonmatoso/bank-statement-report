import { Input, Label } from './Checkbox.styles'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string
}

export const Checkbox = ({ name, text, checked, ...rest }: CheckboxProps) => {
  return (
    <Label htmlFor={name} checked={Boolean(checked)}>
      {text}
      <Input type="checkbox" name={name} checked={checked} {...rest} />
    </Label>
  )
}
