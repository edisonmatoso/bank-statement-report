import styled from '@emotion/styled'

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
