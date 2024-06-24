import styled, { css } from 'styled-components';
import { Size } from '../../components/tripDetail/TripInfo';

export const Container = styled.div<{ size: Size }>`
  width: 100%;
  display: grid;
  align-items: center;
  transition: all ease-in-out 0.3s;

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          grid-template-columns: 1fr fit-content(100%);
          margin-bottom: 16px;
          gap: 8px;
        `;
        break;

      case 'xs':
        return css`
          grid-template-columns: fit-content(100%) 1fr;
          margin-bottom: 13px;
          gap: 11px;
        `;
        break;

      default:
        return css`
          grid-template-columns: 1fr fit-content(100%);
          margin-bottom: 20px;
          gap: 13px;
        `;
        break;
    }
  }};
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding: 4px 12px;
  border: 0;
  border-radius: 15px;
  font-size: 13px;
  line-height: 22px;
  cursor: pointer;
  color: ${({ theme }) => theme.gray01};
  background-color: ${({ theme }) => theme.gray06};

  &:hover {
    background-color: ${({ theme }) => theme.gray04};
  }
`;

export const DetailList = styled.ul<{ size: Size }>`
  display: flex;

  ${({ size }) =>
    size !== 'default'
      ? css`
          flex-direction: row;
          gap: 10px;
        `
      : css`
          flex-direction: column;
          gap: 6px;
        `};
`;

const defaultDetailItem = css`
  font-size: 14px;
  line-height: 22px;

  svg {
    width: 22px;
    height: 22px;
  }
`;
const smallDetailItem = css`
  font-size: 12px;
  line-height: 18.5px;

  svg {
    width: 14px;
    height: 14px;
  }
`;
export const DetailItem = styled.li<{ size: Size }>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.gray};
  gap: 8px;

  ${({ size }) => (size === 'default' ? defaultDetailItem : smallDetailItem)}

  span:first-of-type {
    display: flex;
    span {
      width: 0px;
      height: 0px;
      visibility: hidden;
    }
  }
`;
