import { DayTransactions as DayTransactionsType } from '../../../../services/types'
import { DayTransactions } from './components'
import {
  EmptyMessage,
  HeaderList,
  Item,
  ListContainer
} from './TransactionList.styles'

type TransactionListProps = {
  transactions: DayTransactionsType[] | undefined
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  if (!transactions?.length) {
    return <EmptyMessage>Não há transações para o seu filtro</EmptyMessage>
  }
  return (
    <div>
      <HeaderList>
        <Item>Valor</Item>
        <Item date>Data</Item>
        <Item>Tipo de transação</Item>
      </HeaderList>
      <ListContainer>
        {transactions?.map((dateTransaction) => (
          <DayTransactions
            key={dateTransaction.date}
            dayTransactions={dateTransaction}
          />
        ))}
      </ListContainer>
    </div>
  )
}
