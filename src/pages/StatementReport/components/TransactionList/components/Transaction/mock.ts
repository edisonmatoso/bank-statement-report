import {
  Entry,
  Source,
  Status,
  Transaction
} from '../../../../../../services/types'

export const CompletedPaymentDebitTransaction: Transaction = {
  actor: 'Fulano',
  amount: 111,
  dateEvent: '2021-01-06T21:00:00Z',
  entry: Entry.Debit,
  scheduled: false,
  source: Source.Payment,
  status: Status.Completed,
  type: 'BANKSLIP'
}
export const CompletedPaymentCreditTransaction: Transaction = {
  actor: 'Fulano',
  amount: 111,
  dateEvent: '2021-01-06T21:00:00Z',
  entry: Entry.Credit,
  scheduled: false,
  source: Source.Payment,
  status: Status.Completed,
  type: 'BANKSLIP'
}

export const CompletedTransferDebitTransaction: Transaction = {
  actor: 'Fulano',
  amount: 111,
  dateEvent: '2021-01-06T21:00:00Z',
  entry: Entry.Debit,
  scheduled: false,
  source: Source.Transfer,
  status: Status.Completed,
  type: 'BANKSLIP'
}

export const CompletedTransferCreditTransaction: Transaction = {
  actor: 'Fulano',
  amount: 111,
  dateEvent: '2021-01-06T21:00:00Z',
  entry: Entry.Credit,
  scheduled: false,
  source: Source.Transfer,
  status: Status.Completed,
  type: 'BANKSLIP'
}

export const RefundedPaymentCreditTransaction: Transaction = {
  actor: 'Fulano',
  amount: 111,
  dateEvent: '2021-01-06T21:00:00Z',
  entry: Entry.Credit,
  scheduled: false,
  source: Source.Payment,
  status: Status.Refunded,
  type: 'BANKSLIP'
}

export const RefundedTransferCreditTransaction: Transaction = {
  actor: 'Fulano',
  amount: 111,
  dateEvent: '2021-01-06T21:00:00Z',
  entry: Entry.Credit,
  scheduled: false,
  source: Source.Transfer,
  status: Status.Refunded,
  type: 'BANKSLIP'
}

export const PendingPaymentDebitTransaction: Transaction = {
  actor: 'Fulano',
  amount: 111,
  dateEvent: '2021-01-06T21:00:00Z',
  entry: Entry.Debit,
  scheduled: false,
  source: Source.Payment,
  status: Status.Pending,
  type: 'BANKSLIP'
}

export const PendingTransferDebitTransaction: Transaction = {
  actor: 'Fulano',
  amount: 111,
  dateEvent: '2021-01-06T21:00:00Z',
  entry: Entry.Debit,
  scheduled: false,
  source: Source.Transfer,
  status: Status.Pending,
  type: 'BANKSLIP'
}
