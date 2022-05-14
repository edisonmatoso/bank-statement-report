import { Transaction as TransactionType } from '../../../../../../services/types'
import { formatToBRL, resolveTransactionType } from '../../../../../../utils'
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
  return (
    <Container>
      <ActorField>
        <p>{`${transaction.entry} ${transaction.actor}`}</p>
      </ActorField>
      <TransactionTypeField>
        <p>{resolveTransactionType(transaction)}</p>
      </TransactionTypeField>
      <DatetimeField>
        <p>{transaction.dateEvent}</p>
      </DatetimeField>
      <AmountField>
        <Amount transaction={transaction}>
          R$ <span>{formatToBRL(transaction.amount)}</span>
        </Amount>
      </AmountField>
    </Container>
  )
}
