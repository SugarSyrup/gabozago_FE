import styled from 'styled-components';

export const CheckBoxInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  input {
    appearance: none; /* 원래 제공되는 체크박스 없애기 */
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.gray03};

    &:checked {
      border: 1px solid ${({ theme }) => theme.main};
      background: center no-repeat url('/check.svg');
      background-size: contain;
    }
  }
`;
