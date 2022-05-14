import styled from '@emotion/styled'

export const Header = styled.h3`
  /* margin-top: 5px; */
`

export const Divider = styled.hr`
  width: 100vw;
  position: absolute;
  left: 0px;
  height: 1px;
  background-color: ${({ theme }) => theme.color.grays[4]};
  border: none;
  margin: 0;
`

export const Container = styled.div`
  width: 920px;
`
