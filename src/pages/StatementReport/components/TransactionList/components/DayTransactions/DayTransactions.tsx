import { DayTransactions as DayTransactionsType } from '../../../../../../services/types'
import { Transaction } from '../Transaction'
import { Container } from './DayTransactions.styles'

type DayTransactionsProps = {
  dayTransactions: DayTransactionsType
}

export const DayTransactions = ({ dayTransactions }: DayTransactionsProps) => {
  return (
    <Container key={dayTransactions.date}>
      <p>{`${dayTransactions.date} - ${dayTransactions.amountTotal}`}</p>
      {dayTransactions.items.map((transaction) => (
        <Transaction
          key={`${transaction.actor}${transaction.dateEvent}`}
          transaction={transaction}
        />
      ))}
    </Container>
  )
}
