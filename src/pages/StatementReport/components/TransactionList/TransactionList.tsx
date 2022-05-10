import { useEffect, useState } from 'react'
import { getTransactions } from '../../../../services'
import { DayTransactions as DayTransactionsType } from '../../../../services/types'
import { DayTransactions } from './components'

export const TransactionList = () => {
  const [transactions, setTransactions] = useState<DayTransactionsType[]>()

  const handleFetchTransactions = async () => {
    const { results } = await getTransactions()
    setTransactions(results)
  }

  useEffect(() => {
    handleFetchTransactions()
  }, [])

  return (
    <div>
      {transactions?.map((dateTransaction) => (
        <DayTransactions
          key={dateTransaction.date}
          dayTransactions={dateTransaction}
        />
      ))}
    </div>
  )
}
