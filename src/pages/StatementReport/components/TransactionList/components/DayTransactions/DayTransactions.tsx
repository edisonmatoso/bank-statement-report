import { DayTransactions as DayTransactionsType } from '../../../../../../services/types'
import { Transaction } from '../Transaction'
import { Container, Date } from './DayTransactions.styles'

type DayTransactionsProps = {
  dayTransactions: DayTransactionsType
}

export const DayTransactions = ({
  dayTransactions: { date, amountTotal, items }
}: DayTransactionsProps) => {
  return (
    <Container>
      <Date>{date}</Date>
      <span>{amountTotal}</span>
      {items.map((transaction) => (
        <Transaction
          key={`${transaction.actor}${transaction.dateEvent}`}
          transaction={transaction}
        />
      ))}
    </Container>
  )
}
