import styled from '@emotion/styled'

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  background-color: ${({ theme }) => theme.color.grays[5]};
  border-radius: ${({ theme }) => theme.radius[1]};
  padding: 10px;

  & :first-of-type {
    padding: 0 5px;
  }
`

export const SearchInput = styled.input`
  border: none;
  background: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`
