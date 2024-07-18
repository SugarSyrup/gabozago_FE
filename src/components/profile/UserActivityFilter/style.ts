import styled from 'styled-components';

export const FilterList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

// export const FilterItem = styled.select`
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;
//   background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='6' viewBox='0 0 9 6' fill='none'%3E%3Cpath d='M1 1L4.5 5L8.5 1' stroke='%235276FA' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
//     no-repeat 90% 50%;

//   padding: 4px 24px 4px 11px;

//   border-radius: 6px;
//   border: 1px solid ${({ theme }) => theme.main};
//   background-color: ${({ theme }) => theme.blue05};

//   color: ${({ theme }) => theme.main};
//   font-size: 11px;
//   line-height: 19px;
// `;

export const FilterItem = styled.button<{ isActive: boolean }>`
  padding: 2px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.blue.primary : theme.colors.gray.tertiary};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white.primary : theme.colors.font.tertiary};
`;
