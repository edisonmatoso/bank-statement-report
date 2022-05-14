import styled from '@emotion/styled'
import { Entry, Status, Transaction } from '../../../../../../services/types'

type AmountProps = {
  transaction: Transaction
}

export const Container = styled.div`
  display: flex;

  & > * {
    flex: 1;
  }
`

export const ActorField = styled.div``
export const TransactionTypeField = styled.div``
export const DatetimeField = styled.div``
export const AmountField = styled.div`
  & > p {
    text-align: end;
  }
`

export const Amount = styled.p<AmountProps>`
  & span {
    font-weight: 600;
  }

  ${({ theme, transaction: { status, entry } }) => {
    if (status === Status.Refunded) {
      return `
        text-decoration: line-through;

        & span {
          font-weight: normal; 
        }
      `
    }
    if (entry === Entry.Debit) {
      return `
        color: ${theme.color.main.primary};

        ::before {
          content: '- '
        }
      `
    }
    if (entry === Entry.Credit) {
      return `
        color: ${theme.color.main.secondary};

        

        ::before {
          content: '+ '
        }
      `
    }
  }}
`
