import { CreditIcon, DebitIcon, RefundedIcon } from '../../../../icons'
import { Entry, Status, Transaction } from '../../../../services/types'

type TransactionIconProps = {
  transaction: Transaction
}

export const TransactionIcon = ({ transaction }: TransactionIconProps) => {
  if (transaction.status === Status.Refunded) {
    return <RefundedIcon />
  }

  if (transaction.entry === Entry.Credit) {
    return <CreditIcon />
  }

  if (transaction.entry === Entry.Debit) return <DebitIcon />

  return <></>
}
