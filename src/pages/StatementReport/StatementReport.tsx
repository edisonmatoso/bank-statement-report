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

  const handleCheckboxChange = ({
    currentTarget: { name, checked }
  }: ChangeEvent<HTMLInputElement>) => {
    const currentCheckboxValue = { ...checkbox, [name]: checked }
    const { entrada, futuro, saida } = currentCheckboxValue

    const isAllChecked = entrada && futuro && saida
    const tudoIsSelected = name === CheckboxEnum.Tudo && checked

    if (tudoIsSelected || isAllChecked) {
      const newCheckboxValue = {
        [CheckboxEnum.Tudo]: true,
        [CheckboxEnum.Entrada]: false,
        [CheckboxEnum.Futuro]: false,
        [CheckboxEnum.Saida]: false
      }
      setCheckbox(newCheckboxValue)
    } else {
      setCheckbox({
        ...currentCheckboxValue,
        [CheckboxEnum.Tudo]: false
      })
    }
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
