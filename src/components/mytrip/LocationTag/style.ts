import styled from 'styled-components';

export const Container = styled.div`
  padding: 6px 10px 6px 15px;
  color: ${({ theme }) => theme.main};
  background-color: ${({ theme }) => theme.blue05};

  border: ${({ theme }) => `1px solid ${theme.main}`};
  border-radius: 20px;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  svg {
    width: 10px;
    height: 10px;
    cursor: pointer;
  }

  &:active {
    background-color: ${({ theme }) => theme.blue04};
  }
`;
