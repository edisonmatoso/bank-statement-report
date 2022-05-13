import { DayTransactions as DayTransactionsType } from '../../../../services/types'
import { DayTransactions } from './components'

type TransactionListProps = {
  transactions: DayTransactionsType[] | undefined
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div>
      {transactions?.map((dateTransaction) => (
        <DayTransactions
          key={dateTransaction.date}
          dayTransactions={dateTransaction}
        />
      ))}
    </div>
  )
}