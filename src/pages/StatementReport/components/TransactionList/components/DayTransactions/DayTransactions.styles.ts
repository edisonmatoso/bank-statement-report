import styled from '@emotion/styled'

export const Container = styled.div`
  padding: 16px 18px 16px 12px;
  margin-top: 50px;
  border: ${({ theme }) => `${theme.border[1]} ${theme.color.grays[3]}`};
  border-radius: ${({ theme }) => theme.radius[1]};

  ::after {
    content: '';
    border-left: ${({ theme }) => `1px solid ${theme.color.grays[3]}`};
    height: 15px;

    position: absolute;
    margin-left: 15px;
    margin-top: 16px;
  }
`

export const DateLabel = styled.span`
  color: ${({ theme }) => theme.color.grays[1]};
  font-weight: 700;
  font-size: 12px;

  position: absolute;
  margin-top: -48px;

  ::before {
    content: '';
    border-left: ${({ theme }) => `1px solid ${theme.color.grays[3]}`};
    height: 15px;

    position: absolute;
    margin-left: 15px;
    margin-top: 17px;
  }
`

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
export const Amount = styled.p`
  position: absolute;
  margin-top: 35px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.grays[2]};

  span {
    font-weight: 700;
  }
`
