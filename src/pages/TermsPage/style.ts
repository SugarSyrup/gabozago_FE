import styled from 'styled-components'

export const Heading = styled.h2`
  margin: 20px 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
`
export const Text = styled.p`
  margin: 10px 0;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: ${({ theme }) => theme.gray01};
`
