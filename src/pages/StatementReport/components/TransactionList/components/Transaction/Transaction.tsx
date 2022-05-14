import { Transaction as TransactionType } from '../../../../../../services/types'
import { resolveTransactionType } from '../../../../utils'
import {
  ActorField,
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
        <p>{transaction.amount}</p>
      </AmountField>
    </Container>
  )
}
