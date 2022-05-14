import { ChangeEvent } from 'react'
import { Checkbox as CheckboxType } from '../../StatementReport'
import { Checkbox } from '../Checkbox'
import { SearchInput } from '../SearchInput'
import { CheckboxContainer, FiltersContainer } from './Filters.styles'

export enum CheckboxName {
  Tudo = 'tudo',
  Entrada = 'entrada',
  Saida = 'saida',
  Futuro = 'futuro'
}

type FiltersProps = {
  checkbox: CheckboxType
  handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void
  input: string
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Filters = ({
  checkbox,
  handleCheckboxChange,
  input,
  handleInputChange
}: FiltersProps) => {
  return (
    <FiltersContainer>
      <CheckboxContainer>
        <Checkbox
          text="Tudo"
          name={CheckboxName.Tudo}
          id={CheckboxName.Tudo}
          checked={checkbox.tudo}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          text="Entrada"
          name={CheckboxName.Entrada}
          id={CheckboxName.Entrada}
          checked={checkbox.entrada}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          text="Saída"
          name={CheckboxName.Saida}
          id={CheckboxName.Saida}
          checked={checkbox.saida}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          text="Futuro"
          name={CheckboxName.Futuro}
          id={CheckboxName.Futuro}
          checked={checkbox.futuro}
          onChange={handleCheckboxChange}
        />
      </CheckboxContainer>
      <SearchInput
        type="text"
        placeholder="Pesquisar"
        onChange={handleInputChange}
        value={input}
      />
    </FiltersContainer>
  )
}
