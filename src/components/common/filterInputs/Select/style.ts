import styled from 'styled-components';
import checkIcon from '../../../../assets/icons/check.svg';

export const List = styled.ol`
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li<{ checked: boolean }>`
  position: relative;

  width: 100%;
  line-height: 22px;
  word-break: keep-all;
  font-size: 16px;
  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  display: none;

  & + label {
    padding: 0px 20px;

    display: grid;
    grid-template-columns: 1fr fit-content(100%);
    align-items: center;

    color: ${({ theme }) => theme.gray01};
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;

    &::after {
      content: '';
      display: none;
      width: 20px;
      height: 20px;
      background-image: url(${checkIcon});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  &:checked + label {
    color: ${({ theme }) => theme.main};
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;

    &::after {
      display: block;
    }
  }
`;
