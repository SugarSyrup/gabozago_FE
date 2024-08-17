import styled from 'styled-components';

export const List = styled.ol`
  padding: 20px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, auto));
  //grid-template-rows: repeat(auto-fit, 36px);
  gap: 6px 8px;
`;

export const Item = styled.li<{ checked: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 6px;

  width: 100%;
  line-height: 22px;
  word-break: keep-all;
  font-size: 16px;
`;

export const CheckboxInput = styled.input`
  display: none;

  & + label {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    color: ${({ theme }) => theme.gray01};
    font-weight: 400;
    background-color: ${({ theme }) => theme.blue05};

    &:hover {
      background-color: ${({ theme }) => theme.blue04};
    }
  }

  &:checked + label {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.main};
  }
`;
