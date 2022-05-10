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
  status: 'COMPLETED' | 'REFUNDED' | 'PENDING'
  actor: string
  amount: number
  source: 'PAYMENT' | 'TRANSFER'
  type: 'BANKSLIP' | 'EXTERNAL' | 'INTERNAL'
  entry: 'CREDIT' | 'DEBIT'
  dateEvent: string
  scheduled: boolean
}
