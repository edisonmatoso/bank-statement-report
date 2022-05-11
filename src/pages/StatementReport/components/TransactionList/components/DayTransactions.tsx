import { DayTransactions as DayTransactionsType } from '../../../../../services/types'
import { Transaction } from './Transaction'

type DayTransactionsProps = {
  dayTransactions: DayTransactionsType
}

export const DayTransactions = ({ dayTransactions }: DayTransactionsProps) => {
  return (
    <div key={dayTransactions.date} style={{ padding: 5 }}>
      <p>{`${dayTransactions.date} - ${dayTransactions.amountTotal}`}</p>
      {dayTransactions.items.map((transaction) => (
        <Transaction
          key={`${transaction.actor}${transaction.dateEvent}`}
          transaction={transaction}
        />
      ))}
    </div>
  )
}
