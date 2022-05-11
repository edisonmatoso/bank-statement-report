import { screen, render, fireEvent } from '@testing-library/react'
import { StatementReport } from './StatementReport'

describe('StatementReport', () => {
  it('should unselect another checkboxes when select `Tudo`', () => {
    render(<StatementReport />)

    const tudoCheckbox = screen.getByLabelText<HTMLInputElement>(/tudo/i)
    const entradaCheckbox = screen.getByLabelText<HTMLInputElement>(/entrada/i)

    fireEvent.click(tudoCheckbox)
    fireEvent.click(entradaCheckbox)
    fireEvent.click(tudoCheckbox)

    expect(tudoCheckbox.checked).toBe(true)
    expect(entradaCheckbox.checked).toBe(false)
  })
  it('should unselect all checkboxes and select `Tudo` when selecting each one', () => {
    render(<StatementReport />)

    const tudoCheckbox = screen.getByLabelText<HTMLInputElement>(/tudo/i)
    const entradaCheckbox = screen.getByLabelText<HTMLInputElement>(/entrada/i)
    const saidaCheckbox = screen.getByLabelText<HTMLInputElement>(/saída/i)
    const futuroCheckbox = screen.getByLabelText<HTMLInputElement>(/futuro/i)

    fireEvent.click(tudoCheckbox)
    fireEvent.click(entradaCheckbox)
    fireEvent.click(saidaCheckbox)
    fireEvent.click(futuroCheckbox)

    expect(tudoCheckbox.checked).toBe(true)
    expect(entradaCheckbox.checked).toBe(false)
    expect(saidaCheckbox.checked).toBe(false)
    expect(futuroCheckbox.checked).toBe(false)
  })
})
