import { render, screen } from '@testing-library/react'
import { Transaction as TransactionType } from '../../../../../../services/types'
import {
  CompletedPaymentCreditTransaction,
  CompletedPaymentDebitTransaction,
  CompletedTransferCreditTransaction,
  CompletedTransferDebitTransaction,
  PendingPaymentDebitTransaction,
  PendingTransferDebitTransaction,
  RefundedPaymentCreditTransaction,
  RefundedTransferCreditTransaction
} from './mock'
import { Transaction } from './Transaction'

const setup = (transaction: TransactionType) =>
  render(<Transaction transaction={transaction} />)

describe('Transaction component', () => {
  describe('when status', () => {
    describe('is equal `COMPLETED`', () => {
      describe('and source is equal `PAYMENT`', () => {
        describe('with `DEBIT` entry', () => {
          it('should have `Pagamento Realizado` label', () => {
            setup(CompletedPaymentDebitTransaction)

            expect(screen.getByText(/pagamento realizado/i)).toBeInTheDocument()
          })
        })
        describe('with `CREDIT` entry', () => {
          it('should have `Pagamento Recebido` label', () => {
            setup(CompletedPaymentCreditTransaction)

            expect(screen.getByText(/pagamento recebido/i)).toBeInTheDocument()
          })
        })
      })
      describe('and source is equal `TRANSFER`', () => {
        describe('with `DEBIT` entry', () => {
          it('should have `Transferência Realizada` label', () => {
            setup(CompletedTransferDebitTransaction)

            expect(
              screen.getByText(/transferência realizada/i)
            ).toBeInTheDocument()
          })
        })
        describe('with `CREDIT` entry', () => {
          it('should have `Transferência Recebida` label', () => {
            setup(CompletedTransferCreditTransaction)

            expect(
              screen.getByText(/transferência recebida/i)
            ).toBeInTheDocument()
          })
        })
      })
    })
    describe('is equal `REFUNDED`', () => {
      describe('and source is equal `PAYMENT`', () => {
        describe('with `CREDIT` entry', () => {
          it('should have `Pagamento Estornado` label', () => {
            setup(RefundedPaymentCreditTransaction)

            expect(screen.getByText(/pagamento estornado/i)).toBeInTheDocument()
          })
        })
      })
      describe('and source is equal `TRANSFER`', () => {
        describe('with `CREDIT` entry', () => {
          it('should have `Transferência Estornada` label', () => {
            setup(RefundedTransferCreditTransaction)

            expect(
              screen.getByText(/transferência estornada/i)
            ).toBeInTheDocument()
          })
        })
      })
    })
    describe('is equal `PENDING`', () => {
      describe('and source is equal `PAYMENT`', () => {
        describe('with `DEBIT` entry', () => {
          it('should have `Pagamento Agendado` label', () => {
            setup(PendingPaymentDebitTransaction)

            expect(screen.getByText(/pagamento agendado/i)).toBeInTheDocument()
          })
        })
      })
      describe('and source is equal `TRANSFER`', () => {
        describe('with `DEBIT` entry', () => {
          it('should have `Transferência Agendada` label', () => {
            setup(PendingTransferDebitTransaction)

            expect(
              screen.getByText(/transferência agendada/i)
            ).toBeInTheDocument()
          })
        })
      })
    })
  })
})
