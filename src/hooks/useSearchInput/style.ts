import styled from 'styled-components';

export const Container = styled.form<{
  backgroundColor: string;
  borderColor: string;
}>`
  padding: 7px 20px;
  border-radius: 20px;
  border: ${({ theme }) => `1px solid${theme.gray02}`};
  border: ${({ borderColor }) => `1px solid${borderColor}`};
  background-color: ${({ backgroundColor }) => backgroundColor};

  &:focus-within {
    border: ${({ theme }) => `1px solid${theme.main}`};
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  width: 100%;
`;

export const Input = styled.input<{ placeholderColor?: string }>`
  border: none;
  width: 80%;

  height: 22px;
  line-height: 22px;
  font-size: 16px;

  background-color: inherit;
  &::placeholder {
    color: ${({ theme, placeholderColor }) => placeholderColor || theme.blue03};
  }

  &:focus {
    outline: none;
  }
`;

export const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  svg.circleX {
    cursor: pointer;
    path: {
      fill: ${({ theme }) => theme.gray04};
    }
  }
`;

export const SearchButton = styled.button<{ searchIconColor?: string }>`
  border: none;
  background-color: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    path {
      fill: ${({ theme, searchIconColor }) => searchIconColor || theme.main};
    }
  }
`;
