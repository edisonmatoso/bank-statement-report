import { Transaction as TransactionType } from '../../../../../../services/types'
import { resolveTransactionType } from '../../../../utils'

type TransactionProps = {
  transaction: TransactionType
}

export const Transaction = ({ transaction }: TransactionProps) => {
  return (
    <p
      key={`${transaction.actor}${transaction.amount}`}
      style={{ marginLeft: 10 }}
    >{`${transaction.actor} - ${resolveTransactionType(transaction)}  - ${
      transaction.amount
    }`}</p>
  )
}
