import { Transaction as TransactionType } from '../../../../../../services/types'
import {
  formatMonth,
  formatToBRL,
  resolveTransactionType
} from '../../../../../../utils'
import {
  ActorField,
  Amount,
  AmountField,
  Container,
  DatetimeField,
  TransactionTypeField
} from './Transaction.styles'

type TransactionProps = {
  transaction: TransactionType
}

export const Transaction = ({ transaction }: TransactionProps) => {
  const handleDate = () => {
    const date = new Date(transaction.dateEvent)
    const isToday = date.getDate() === new Date().getDate()
    const formattedMinutes = date.getMinutes() === 0 ? `00` : date.getMinutes()

    const formattedDate = `${date.getDate()} ${formatMonth(
      date.getMonth()
    )} ${date.getFullYear()} - ${date.getHours()}:${formattedMinutes}`

    return isToday ? `Hoje - ${formattedDate}` : formattedDate
  }

  const date = handleDate()
  return (
    <Container>
      <ActorField>
        <p>{`${transaction.entry} ${transaction.actor}`}</p>
      </ActorField>
      <TransactionTypeField>
        <p>{resolveTransactionType(transaction)}</p>
      </TransactionTypeField>
      <DatetimeField>
        <p>{date}</p>
      </DatetimeField>
      <AmountField>
        <Amount transaction={transaction}>
          R$ <span>{formatToBRL(transaction.amount)}</span>
        </Amount>
      </AmountField>
    </Container>
  )
}
