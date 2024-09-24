import styled from 'styled-components';

export const MenuList = styled.ul`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MenuItem = styled.li<{ color?: string }>`
  width: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.gray01};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

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
`;
