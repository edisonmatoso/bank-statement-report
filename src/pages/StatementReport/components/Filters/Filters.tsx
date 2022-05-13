import { ChangeEvent } from 'react'
import { Checkbox as CheckboxType } from '../../StatementReport'

export enum Checkbox {
  Tudo = 'tudo',
  Entrada = 'entrada',
  Saida = 'saida',
  Futuro = 'futuro'
}

type FiltersProps = {
  checkbox: CheckboxType
  handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void
  input: string | undefined
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Filters = ({
  checkbox,
  handleCheckboxChange,
  input,
  handleInputChange
}: FiltersProps) => {
  return (
    <div>
      <div>
        <label htmlFor="tudo">
          Tudo
          <input
            type="checkbox"
            name={Checkbox.Tudo}
            id={Checkbox.Tudo}
            checked={checkbox.tudo}
            onChange={handleCheckboxChange}
          />
        </label>
        <label htmlFor="entrada">
          Entrada
          <input
            type="checkbox"
            name={Checkbox.Entrada}
            id={Checkbox.Entrada}
            checked={checkbox.entrada}
            onChange={handleCheckboxChange}
          />
        </label>
        <label htmlFor="saida">
          Saída
          <input
            type="checkbox"
            name={Checkbox.Saida}
            id={Checkbox.Saida}
            checked={checkbox.saida}
            onChange={handleCheckboxChange}
          />
        </label>
        <label htmlFor="futuro">
          Futuro
          <input
            type="checkbox"
            name={Checkbox.Futuro}
            id={Checkbox.Futuro}
            checked={checkbox.futuro}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
      <input
        type="text"
        placeholder="Pesquisar"
        onChange={handleInputChange}
        value={input}
      />
    </div>
  )
}
