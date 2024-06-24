import styled from 'styled-components';

export const Container = styled.div`
  padding: 17px 20px;
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray06};

  p {
    word-break: keep-all;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;

    &:last-of-type {
      font-size: 14px;
      font-weight: 300;
      color: ${({ theme }) => theme.gray01};
    }
  }
`;

export const ToggleButton = styled.button<{ active: boolean }>`
  width: 40px;
  height: 24px;
  position: relative;

  transition: all ease-in-out 0.2s;
  cursor: pointer;
  border-radius: 99px;
  border: 0;
  background-color: ${({ theme, active }) => (active ? theme.main : theme.gray04)};

  &::after {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 3px;
    left: ${({ active }) => (active ? 19 : 3)}px;

    border-radius: 50%;
    transition: all ease-in-out 0.2s;
    background-color: ${({ theme }) => theme.white};
  }
`;
