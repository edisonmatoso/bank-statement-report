import { ChangeEvent, useEffect, useState } from 'react'
import { getTransactions } from '../../services'
import { DayTransactions, Entry } from '../../services/types'
import { CheckboxName, Filters, TransactionList } from './components'

export type Checkbox = {
  [key in CheckboxName]: boolean
}

export const StatementReport = () => {
  const initialCheckbox = {
    [CheckboxName.Tudo]: true,
    [CheckboxName.Entrada]: false,
    [CheckboxName.Saida]: false,
    [CheckboxName.Futuro]: false
  }

  const [transactions, setTransactions] = useState<DayTransactions[]>()
  const [checkbox, setCheckbox] = useState<Checkbox>(initialCheckbox)
  const [input, setInput] = useState<string>('')

  const currentFilter = Object.keys(checkbox).filter(
    (key) => checkbox[key as CheckboxName]
  ) as CheckboxName[]

  const handleEntry = (entry: Entry, filter: CheckboxName) => {
    const entryDictionary = {
      [CheckboxName.Tudo]: true,
      [CheckboxName.Entrada]: entry === Entry.Credit,
      [CheckboxName.Saida]: entry === Entry.Debit,
      [CheckboxName.Futuro]: false
    }

    return entryDictionary[filter]
  }

  const handleTransactionEntryFilter = (transactions: DayTransactions[]) => {
    const isFuturoActivated = currentFilter.some(
      (filter) => filter === CheckboxName.Futuro
    )
    const isTudoActivated = currentFilter.some(
      (filter) => filter === CheckboxName.Tudo
    )

    if (isTudoActivated) {
      return transactions
    }

    const filteredSubTransactions = transactions.map((transaction) => ({
      ...transaction,
      items: transaction.items.filter(({ entry, scheduled }) =>
        isFuturoActivated && scheduled
          ? true
          : currentFilter.some((filter) => handleEntry(entry, filter))
      )
    }))
    return filteredSubTransactions.filter(({ items }) => items.length)
  }

  const handleInputFilter = (transactions: DayTransactions[]) =>
    transactions
      .map((transaction) => ({
        ...transaction,
        items: transaction.items.filter(
          ({ actor }) => input && actor.toLowerCase().includes(input)
        )
      }))
      .filter(({ items }) => items.length)

  const handleCheckboxChange = ({
    currentTarget: { name, checked }
  }: ChangeEvent<HTMLInputElement>) => {
    const currentCheckboxValue = { ...checkbox, [name]: checked }
    const { entrada, futuro, saida } = currentCheckboxValue

    const isAllChecked = entrada && futuro && saida
    const tudoIsSelected = name === CheckboxName.Tudo && checked

    if (tudoIsSelected || isAllChecked) {
      const newCheckboxValue = {
        [CheckboxName.Tudo]: true,
        [CheckboxName.Entrada]: false,
        [CheckboxName.Futuro]: false,
        [CheckboxName.Saida]: false
      }
      setCheckbox(newCheckboxValue)
    } else {
      setCheckbox({
        ...currentCheckboxValue,
        [CheckboxName.Tudo]: false
      })
    }
  }

  const handleFilters = () => {
    if (transactions) {
      const filteredByCheckbox = handleTransactionEntryFilter(transactions)

      return input?.length
        ? handleInputFilter(filteredByCheckbox)
        : filteredByCheckbox
    }
  }

  const handleFetchTransactions = async () => {
    const { results } = await getTransactions()
    setTransactions(results)
  }
  const filteredTransactions = handleFilters()

  useEffect(() => {
    handleFetchTransactions()
  }, [])

  return (
    <div>
      <Filters
        checkbox={checkbox}
        handleCheckboxChange={handleCheckboxChange}
        input={input}
        handleInputChange={({ currentTarget: { value } }) => setInput(value)}
      />
      <TransactionList transactions={filteredTransactions} />
    </div>
  )
}
