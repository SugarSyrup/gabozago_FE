import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 9px;

  position: relative;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.2px;
`;

export const Input = styled.input<{
  disabled: boolean;
}>`
  width: 100%;
  padding: 8px;

  border-radius: 4px;
  border: 1px solid #dcdcdc;
  background: ${({ disabled, theme }) => (disabled ? theme.gray06 : theme.white)};

  color: ${({ disabled, theme }) => (disabled ? theme.gray02 : theme.black)};

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const InputExplain = styled.span`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  img {
    width: 16px;
    height: 16px;

    border-radius: 100%;
  }

  color: ${({ theme }) => theme.gray02};
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.2px;
`;

export const InputAlert = styled.span<{ hasExplain: boolean }>`
  position: absolute;
  bottom: ${({ hasExplain }) => (hasExplain ? '0px' : '-28px')};
  right: 0px;
`;

export const ConfirmButton = styled.span`
  position: absolute;
  right: 11px;
  top: 42px;

  padding: 0px 12px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.main};
  background: #ecf0ff;

  color: ${({ theme }) => theme.main};
  font-size: 11px;
  line-height: 22px;
  cursor: pointer;
`;
