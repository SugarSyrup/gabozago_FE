import styled from 'styled-components';

export const ListItem = styled.li`
  margin: 0 -20px;
  width: calc(100% + 40px);
  position: relative;
  overflow: hidden;

  &::after {
    content: '삭제';
    position: absolute;
    top: 1px;
    bottom: 1px;
    right: 0;
    display: flex;
    width: 80px;
    height: calc(100% -2px);
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.red};
    color: ${({ theme }) => theme.white};
  }
`;

export const Wrapper = styled.div<{ isSelected: boolean; translateX: number }>`
  position: relative;
  z-index: 10;
  padding: 10px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: nowrap;

  transition: transform 0.2s;
  transform: translateX(0);
  transform: translateX(${({ translateX }) => `${translateX}px`});

  cursor: pointer;
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.blue04 : theme.white)};

  svg {
    path {
      fill: ${({ theme }) => theme.blue02};
    }
  }
`;

export const PlaceInfo = styled.div`
  flex-grow: 1;
  padding: 10px 16px;
  display: flex;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue05};

  & > span {
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;

    font-size: 10px;
    line-height: 22px;
    border-radius: 50%;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.main};
  }

  & > div {
    color: ${({ theme }) => theme.black};

    p {
      font-weight: 600;
      line-height: 22px; /* 157.143% */
      font-size: 14px;
      font-weight: 500;
    }

    p:last-of-type {
      font-size: 11px;
      line-height: 22px;
      font-weight: 400;
      color: ${({ theme }) => theme.gray01};
    }
  }
`;
