export type DataFetch = {
  itemsTotal: number
  results: DayTransactions[]
}

export type DayTransactions = {
  date: string
  amountTotal: number
  items: Transaction[]
}

export type Transaction = {
  status: Status
  actor: string
  amount: number
  source: Source
  type: 'BANKSLIP' | 'EXTERNAL' | 'INTERNAL'
  entry: Entry
  dateEvent: string
  scheduled: boolean
}

export enum Status {
  Completed = 'COMPLETED',
  Refunded = 'REFUNDED',
  Pending = 'PENDING'
}

export enum Source {
  Payment = 'PAYMENT',
  Transfer = 'TRANSFER'
}

export enum Entry {
  Debit = 'DEBIT',
  Credit = 'CREDIT'
}
