import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Index = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.main};

  svg {
    width: 18px;
    height: 18px;
  }
`;
