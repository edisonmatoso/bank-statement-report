import { ChangeEvent, useEffect, useState } from 'react'
import { getTransactions } from '../../services'
import { DayTransactions } from '../../services/types'
import {
  Checkbox as CheckboxEnum,
  Filters,
  TransactionList
} from './components'

export type Checkbox = {
  [key in CheckboxEnum]: boolean
}

export const StatementReport = () => {
  const initialCheckbox = {
    [CheckboxEnum.Tudo]: true,
    [CheckboxEnum.Entrada]: false,
    [CheckboxEnum.Saida]: false,
    [CheckboxEnum.Futuro]: false
  }

  const [transactions, setTransactions] = useState<DayTransactions[]>()
  const [checkbox, setCheckbox] = useState<Checkbox>(initialCheckbox)

  const currentFilter = Object.keys(checkbox).filter(
    (key) => checkbox[key as CheckboxEnum]
  ) as CheckboxEnum[]

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name

    setCheckbox({
      ...checkbox,
      [name]: event.currentTarget.checked
    })
  }

  const handleFetchTransactions = async () => {
    const { results } = await getTransactions()
    setTransactions(results)
  }

  useEffect(() => {
    handleFetchTransactions()
  }, [])

  return (
    <div>
      <Filters
        checkbox={checkbox}
        handleCheckboxChange={handleCheckboxChange}
      />
      <TransactionList transactions={transactions} />
    </div>
  )
}
