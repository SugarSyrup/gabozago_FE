import styled from 'styled-components';

export const Contents = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 26px;
`;

export const LocationAccessToggleWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleSwitch = styled.div<{ isActive: boolean }>`
  width: 40px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 20px;
  position: relative;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.blue.primary : theme.colors.gray.tertiary};

  transition: all 0.3 linear;
  div {
    width: 18px;
    height: 18px;
    margin-top: 3px;
    border-radius: 100%;
    background-color: white;

    position: absolute;
    left: ${({ isActive }) => !isActive && '3px'};
    right: ${({ isActive }) => isActive && '3px'};
  }
`;

export const TermsLink = styled.span`
  margin-top: -20px;
  color: ${({ theme }) => theme.colors.blue.primary};
  text-decoration: underline;
  cursor: pointer;
`;

export const TermsContainer = styled.div`
  padding-top: 24px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
`;

export const TermsContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

  table,
  th,
  td {
    border: 1px solid #ebebeb;
    border-collapse: collapse;
  }

  td,
  th {
    padding: 8px;
  }

  table {
    width: 100%;

    thead tr {
      background-color: #f5f5f5;
      text-align: left;
    }

    thead tr th,
    tbody tr td {
      font-weight: 400;
      font-size: 12px;
    }
  }
`;

export const TermsHeader = styled.span`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const TermsText = styled.span`
  color: #727272;
  text-align: justify;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 169.231% */
`;
