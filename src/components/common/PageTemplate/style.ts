import styled from 'styled-components'

export const Container = styled.div<{ header: boolean }>`
  margin: auto;
  height: auto;
  min-height: 100dvh;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.white};
`

export const Content = styled.div<{ header: number; nav: boolean }>`
  position: relative;
  width: 100%;
  padding: ${({ header }) => (header ? '0 20px' : '60px 20px')};
  padding-top: ${({ header }) => `${header}px`};
  padding-bottom: ${({ nav }) => (nav ? '100px' : '60px')};
`

export const Header = styled.header`
  width: 100%;
  max-width: 500px;
  position: fixed;
  top: 0;
  z-index: 100;
`
