import styled from 'styled-components';

export const FilterList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const FilterItem = styled.div<{ isHighlight?: boolean }>`
  padding: 5px 11px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.gray05};

  font-size: 11px;
  line-height: 20px;
  color: ${({ theme }) => theme.gray01};

  background-color: ${({ theme, isHighlight }) => isHighlight && theme.main};
  color: ${({ isHighlight }) => isHighlight && 'white'};
`;
