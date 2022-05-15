import styled from '@emotion/styled'

type ItemProps = {
  date?: boolean
}

export const HeaderList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  direction: rtl;
  font-size: 12px;

  & > * {
    margin-left: 3px;
    margin-right: 18px;
  }

  & > *:not(:first-of-type) {
    text-align: end;
  }
`

export const ListContainer = styled.div`
  & > :first-of-type {
    margin-top: 17px;
  }
`

export const Item = styled.span<ItemProps>`
  ${({ theme, date }) => {
    return date
      ? `
        color: ${theme.color.main.primary};
        font-weight: 700;
      `
      : `
      color: ${theme.color.grays[2]};
      `
  }}
`
