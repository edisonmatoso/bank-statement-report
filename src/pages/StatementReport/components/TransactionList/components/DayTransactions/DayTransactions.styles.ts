import styled from '@emotion/styled'

export const Container = styled.div`
  padding: 16px 18px 16px 12px;
  margin: 50px 0;
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

export const Date = styled.span`
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
