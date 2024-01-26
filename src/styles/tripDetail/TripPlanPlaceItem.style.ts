import styled from "styled-components";
import line from "../../assets/icons/line.svg";

export const PlaceItem = styled.li`
  width: 100%;
  position: relative;
  display: grid;
  align-items: center;
  gap: 10px;
  grid-template-columns: 20px 1fr;

  &:not(:last-of-type) {
    padding-bottom: 6px;
    & > div:first-of-type:after {
      content: "";
      display: block;
      width: 1.6px;
      height: 62px;
      background-image: url(${line});
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;

export const MarkerBox = styled.div`
  display: flex;
  height: 100%;
  gap: 3px;
  flex-direction: column;
  align-items: center;
  position: relative;

  span {
    position: absolute;
    top: 0;
    font-size: 11px;
    line-height: 18px;
    color: ${({ theme }) => theme.white};
  }
`;

export const PlaceBox = styled.div`
  padding: 12px 20px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 38px;
  align-items: center;
  background-color: ${({ theme }) => theme.blue05};
  border-radius: 10px;

  div {
    line-height: 22px;
    p:nth-of-type(1) {
      font-weight: 600;
      font-size: 14px;
    }
    p:nth-of-type(2) {
      font-size: 11px;
      font-weight: 400;
      color: ${({ theme }) => theme.gray01};
    }
    p:nth-of-type(3) {
      font-size: 11px;
      font-weight: 400;
      color: ${({ theme }) => theme.main};
    }
  }

  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
`;
