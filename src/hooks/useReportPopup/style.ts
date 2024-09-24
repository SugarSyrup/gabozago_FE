import styled from 'styled-components';

export const PopupConatiner = styled.div`
  width: 100%;
`;

export const ReportForm = styled.form`
  width: 100%;

  padding-top: 10px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  h3 {
    text-align: center;
  }
`;

export const ReasonList = styled.ol`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ResonItem = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;

export const RadioInput = styled.input`
  width: 24px;
  height: 24px;
  border-radius: 100%;

  background-color: white;
  vertical-align: middle;
  appearance: none;

  background: center no-repeat url('/Icons/radio_empty.svg');
  &:checked {
    background: center no-repeat url('/Icons/radio_checked.svg');
    border: none;
  }
`;

export const RadioLabel = styled.label`
  cursor: pointer;
`;

export const ControlBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid ${({ theme }) => theme.gray04};
`;

export const Button = styled.button<{ primary?: boolean }>`
  border: 0;
  background-color: transparent;
  padding: 12px;

  cursor: pointer;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;

  color: ${({ primary, theme }) => (primary ? theme.main : theme.gray02)};

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.gray04};
  }

  &:hover {
    background-color: ${({ theme }) => theme.gray05};
  }
  &:active {
    background-color: ${({ theme }) => theme.gray04};
  }
`;
