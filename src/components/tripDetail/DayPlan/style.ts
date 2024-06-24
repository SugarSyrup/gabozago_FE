import styled, { css } from 'styled-components';

export const Container = styled.div``;
export const DayInfo = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  margin-bottom: 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  span {
    margin-left: 5px;
    font-weight: 500;
    color: ${({ theme }) => theme.gray01};
    font-size: 13px;
  }
`;

export const EditButton = styled.button`
  padding: 0;
  border: 0;
  border-radius: 5px;
  background-color: transparent;
  font-size: 13px;
  line-height: 22px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme }) => theme.gray01};

  &:hover {
    background-color: ${({ theme }) => theme.gray05};
  }
  &:active {
    background-color: ${({ theme }) => theme.gray04};
  }
`;
export const PlaceList = styled.ol`
  display: flex;
  flex-direction: column;
`;

export const PlaceItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 35px 1fr;
  justify-items: center;
  gap: 20px;
`;

export const MarkerBox = styled.div<{ color: string; hasLine: boolean }>`
  width: 18px;
  height: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  background-color: ${({ color }) => color};
  border-radius: 50%;
  line-height: 0;

  ${({ hasLine, color }) =>
    hasLine &&
    css`
      &::before {
        content: ' ';
        position: absolute;
        width: 0px;
        height: 100%;
        top: 0;
        border: 1px dashed ${color};
      }
    `}
`;
export const NumberSpan = styled.span`
  padding-top: 1px;
  margin: auto;
  line-height: 0;

  z-index: 10;
  font-weight: 500;
  font-size: 11px;
  color: ${({ theme }) => theme.white};
`;
export const DistanceSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 5px;
  position: absolute;
  z-index: 11;

  top: 50%;
  transform: translate(0, -50%);

  cursor: pointer;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray04};
  transition: all 0.3s ease-in-out;
  outline: 3px solid transparent;

  /* Tooltip */
  &::after {
    position: absolute;
    top: -150%;
    opacity: 0;
    width: max-content;
    padding: 3px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    content: '경로 보기';
    transition: all 0.3s ease-in-out;
    transition-delay: 0.2s;

    background-color: ${({ theme }) => theme.blue04};
    border-radius: 10px;
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.white};
    outline: 3px solid ${({ theme }) => theme.blue04};
    box-shadow: 0 5px 10px #849fff70;

    /* Tooltip */
    &::after {
      opacity: 1;
    }
  }
`;
