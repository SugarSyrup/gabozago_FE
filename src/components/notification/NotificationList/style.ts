import styled from 'styled-components';

export const AlertList = styled.ol`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const AlertItem = styled.li<{ isOpen: boolean }>`
  width: calc(100% + 40px);
  margin-left: -20px;
  padding: 15px 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.tertiary};

  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.white.primary : theme.colors.blue.tertiary};

  h3 {
    color: ${({ theme }) => theme.colors.font.primary};
  }

  label {
    color: ${({ theme }) => theme.colors.font.tertiary};
  }
`;

export const AlertInfomation = styled.div`
  width: 100%;
  padding: 16px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.font.tertiary};
`;
