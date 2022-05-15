import { DayTransactions as DayTransactionsType } from '../../../../../../services/types'
import { formatMonth, formatToBRL } from '../../../../../../utils'
import { Transaction } from '../Transaction'
import {
  Amount,
  AmountContainer,
  Container,
  DateLabel
} from './DayTransactions.styles'

type DayTransactionsProps = {
  dayTransactions: DayTransactionsType
}

export const DayTransactions = ({
  dayTransactions: { date, amountTotal, items }
}: DayTransactionsProps) => {
  const handleDate = () => {
    const dateToFormat = new Date(date)

    return `${dateToFormat.getDate() + 1} de ${formatMonth(
      dateToFormat.getMonth(),
      true
    )}`
  }

  const formattedDate = handleDate()

  return (
    <>
      <Container>
        <DateLabel>{formattedDate}</DateLabel>
        {items.map((transaction) => (
          <Transaction
            key={`${transaction.actor}${transaction.dateEvent}`}
            transaction={transaction}
          />
        ))}
        <AmountContainer>
          <Amount>
            saldo do dia <span>R$ {formatToBRL(amountTotal)}</span>
          </Amount>
        </AmountContainer>
      </Container>
    </>
  )
}
