import styled from 'styled-components'

export const MenuList = styled.ul`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
`

export const MenuItem = styled.li<{ color?: string }>`
  padding: 5px 0;
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-auto-rows: fit-content;
  gap: 20px;

  cursor: pointer;
  color: ${({ theme }) => theme.gray01};

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 24px;
    height: 24px;
    line-height: 0;

    path {
      fill: ${({ color, theme }) => color || theme.gray01};
    }
  }
`
