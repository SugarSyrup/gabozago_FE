import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 50px 1fr;
  grid-template-rows: auto;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const MidSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.gray02};
`;

export const NumberInput = styled.input`
  padding: 12px;
  width: 100%;

  background-color: ${({ theme }) => theme.gray07};
  border: 2px solid ${({ theme }) => theme.gray05};
  border-radius: 8px;
  font-size: 16px;
  line-height: auto;
  outline: none;

  &::-webkit-textfield-decoration-container {
    width: 90%;
  }

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.blue02};
  }
`;

export const UnitSpan = styled.span`
  position: absolute;
  right: 12px;
  font-size: 13px;
  color: ${({ theme }) => theme.gray02};
`;
