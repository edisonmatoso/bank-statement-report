/* eslint-disable @typescript-eslint/no-extra-semi */
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import { StatementReport } from './StatementReport'

import { getTransactions } from '../../services'
import { MOCK_DATA_FETCH } from './mock'

jest.mock('../../services', () => ({
  getTransactions: jest.fn()
}))

beforeEach(() => {
  ;(getTransactions as jest.Mock).mockImplementation(() =>
    Promise.resolve(MOCK_DATA_FETCH)
  )
})

describe('StatementReport', () => {
  describe('filters', () => {
    it('should unselect another checkboxes when select `Tudo`', () => {
      render(<StatementReport />)

      const tudoCheckbox = screen.getByLabelText<HTMLInputElement>(/tudo/i)
      const entradaCheckbox =
        screen.getByLabelText<HTMLInputElement>(/entrada/i)

      fireEvent.click(entradaCheckbox)
      fireEvent.click(tudoCheckbox)

      expect(tudoCheckbox.checked).toBe(true)
      expect(entradaCheckbox.checked).toBe(false)
    })
    it('should unselect all checkboxes and select `Tudo` when selecting each one', () => {
      render(<StatementReport />)

      const tudoCheckbox = screen.getByLabelText<HTMLInputElement>(/tudo/i)
      const entradaCheckbox =
        screen.getByLabelText<HTMLInputElement>(/entrada/i)
      const saidaCheckbox = screen.getByLabelText<HTMLInputElement>(/saída/i)
      const futuroCheckbox = screen.getByLabelText<HTMLInputElement>(/futuro/i)

      fireEvent.click(entradaCheckbox)
      fireEvent.click(saidaCheckbox)
      fireEvent.click(futuroCheckbox)

      expect(tudoCheckbox.checked).toBe(true)
      expect(entradaCheckbox.checked).toBe(false)
      expect(saidaCheckbox.checked).toBe(false)
      expect(futuroCheckbox.checked).toBe(false)
    })
  })
  describe('list', () => {
    it('should render just `CREDIT` entry when only `Entrada` is selected', async () => {
      render(<StatementReport />)

      fireEvent.click(screen.getByLabelText<HTMLInputElement>(/entrada/i))

      expect(await screen.findByText(/entry credit/i)).toBeInTheDocument()
      await waitFor(() => {
        expect(screen.queryByText(/entry debit/i)).not.toBeInTheDocument()
      })
    })
    it('should render just `DEBIT` entry when only `Saída` is selected', async () => {
      render(<StatementReport />)

      fireEvent.click(screen.getByLabelText<HTMLInputElement>(/saída/i))

      expect(await screen.findByText(/entry debit/i)).toBeInTheDocument()
      await waitFor(() => {
        expect(screen.queryByText(/entry credit/i)).not.toBeInTheDocument()
      })
    })
    it('should render scheduled transaction entry when `Futuro` is selected', async () => {
      render(<StatementReport />)

      fireEvent.click(screen.getByLabelText<HTMLInputElement>(/futuro/i))

      expect(await screen.findByText(/scheduled/i)).toBeInTheDocument()
    })
    it('should render all transactions when `Tudo` is selected', async () => {
      render(<StatementReport />)

      expect(await screen.findByText(/scheduled/i)).toBeInTheDocument()
      expect(await screen.findByText(/entry debit/i)).toBeInTheDocument()
      expect(await screen.findByText(/entry credit/i)).toBeInTheDocument()
    })
  })
})
