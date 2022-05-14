import styled from '@emotion/styled'

export const Container = styled.div`
  padding: 16px 12px;
  margin: 50px 0;
  border: ${({ theme }) => `${theme.border[1]} ${theme.color.grays[3]}`};
  border-radius: ${({ theme }) => theme.radius[1]};
`
