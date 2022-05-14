/* eslint-disable @typescript-eslint/no-extra-semi */
import { screen, fireEvent, waitFor } from '@testing-library/react'
import { StatementReport } from './StatementReport'

import { getTransactions } from '../../services'
import { MOCK_DATA_FETCH } from './mock'
import { renderWithTheme } from '../../utils/testUtils'

jest.mock('../../services', () => ({
  getTransactions: jest.fn()
}))

beforeEach(() => {
  ;(getTransactions as jest.Mock).mockImplementation(() =>
    Promise.resolve(MOCK_DATA_FETCH)
  )
})

describe('StatementReport', () => {
  describe('checkboxes filter', () => {
    it('should unselect another checkboxes when select `Tudo`', () => {
      renderWithTheme(<StatementReport />)

      const tudoCheckbox = screen.getByLabelText<HTMLInputElement>(/tudo/i)
      const entradaCheckbox =
        screen.getByLabelText<HTMLInputElement>(/entrada/i)

      fireEvent.click(entradaCheckbox)
      fireEvent.click(tudoCheckbox)

      expect(tudoCheckbox.checked).toBe(true)
      expect(entradaCheckbox.checked).toBe(false)
    })
    it('should unselect all checkboxes and select `Tudo` when selecting each one', () => {
      renderWithTheme(<StatementReport />)

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
  describe('list filtering', () => {
    describe('checkboxes', () => {
      it('should render just `CREDIT` entry when only `Entrada` is selected', async () => {
        renderWithTheme(<StatementReport />)

        fireEvent.click(screen.getByLabelText<HTMLInputElement>(/entrada/i))

        expect(await screen.findByText(/entry credit/i)).toBeInTheDocument()
        await waitFor(() => {
          expect(screen.queryByText(/entry debit/i)).not.toBeInTheDocument()
        })
      })
      it('should render just `DEBIT` entry when only `Saída` is selected', async () => {
        renderWithTheme(<StatementReport />)

        fireEvent.click(screen.getByLabelText<HTMLInputElement>(/saída/i))

        expect(await screen.findByText(/entry debit/i)).toBeInTheDocument()
        await waitFor(() => {
          expect(screen.queryByText(/entry credit/i)).not.toBeInTheDocument()
        })
      })
      it('should render scheduled transaction entry when `Futuro` is selected', async () => {
        renderWithTheme(<StatementReport />)

        fireEvent.click(screen.getByLabelText<HTMLInputElement>(/futuro/i))

        expect(await screen.findByText(/scheduled/i)).toBeInTheDocument()
      })
      it('should render all transactions when `Tudo` is selected', async () => {
        renderWithTheme(<StatementReport />)

        expect(await screen.findByText(/scheduled/i)).toBeInTheDocument()
        expect(await screen.findByText(/entry debit/i)).toBeInTheDocument()
        expect(await screen.findByText(/entry credit/i)).toBeInTheDocument()
      })
    })
    describe('input', () => {
      it('should filter by actor name', async () => {
        renderWithTheme(<StatementReport />)

        const input = screen.getByPlaceholderText(/pesquisar/i)

        fireEvent.change(input, { target: { value: 'scheduled' } })

        expect(await screen.findByText(/scheduled/i)).toBeInTheDocument()
        await waitFor(() => {
          expect(screen.queryByText(/entry credit/i)).not.toBeInTheDocument()
        })
      })
    })
  })
})
