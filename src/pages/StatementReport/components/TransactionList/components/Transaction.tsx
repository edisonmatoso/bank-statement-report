import { Transaction as TransactionType } from '../../../../../services/types'

type TransactionProps = {
  transaction: TransactionType
}

export const Transaction = ({ transaction }: TransactionProps) => {
  return (
    <p
      key={`${transaction.actor}${transaction.amount}`}
      style={{ marginLeft: 10 }}
    >{`${transaction.actor} - ${transaction.amount}`}</p>
  )
}
