import styled from 'styled-components';

export const LongButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue.main};

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  label {
    color: white;
  }
`;
