import { ChangeEvent, useEffect, useState } from 'react'
import { getTransactions } from '../../services'
import { DayTransactions, Entry } from '../../services/types'
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

  const handleEntry = (entry: Entry, filter: CheckboxEnum) => {
    const entryDictionary = {
      [CheckboxEnum.Tudo]: true,
      [CheckboxEnum.Entrada]: entry === Entry.Credit,
      [CheckboxEnum.Saida]: entry === Entry.Debit,
      [CheckboxEnum.Futuro]: false
    }

    return entryDictionary[filter]
  }

  const handleTransactionEntryFilter = () => {
    const isFuturoActivated = currentFilter.some(
      (filter) => filter === CheckboxEnum.Futuro
    )
    const isTudoActivated = currentFilter.some(
      (filter) => filter === CheckboxEnum.Tudo
    )

    if (isTudoActivated) {
      return transactions
    }

    const filteredSubTransactions = transactions?.map((transaction) => ({
      ...transaction,
      items: transaction.items.filter(({ entry, scheduled }) =>
        isFuturoActivated && scheduled
          ? true
          : currentFilter.some((filter) => handleEntry(entry, filter))
      )
    }))
    return filteredSubTransactions?.filter(({ items }) => items.length)
  }

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

  const filteredTransactions = handleTransactionEntryFilter()

  return (
    <div>
      <Filters
        checkbox={checkbox}
        handleCheckboxChange={handleCheckboxChange}
      />
      <TransactionList transactions={filteredTransactions} />
    </div>
  )
}
