import styled from "styled-components";
import line from "../../assets/icons/line.svg";

export const PlaceItem = styled.li`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  gap: 10px;

  &:not(:last-of-type) {
    padding-bottom: 10px;

    /* 숫자 마크 아래 라인 */
    & > div:first-of-type:after {
      content: "";
      display: block;
      width: 1.6px;
      /* height: 90%; */
      background-image: url(${line});
      background-repeat: round;
    }
  }
`;

export const MarkerBox = styled.div`
  display: flex;
  height: 100%;
  gap: 3px;
  flex-direction: column;
  align-items: center;
`;
export const MarkerSpan = styled.span`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  padding-top: 2px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.white};
`;

export const PlaceBox = styled.div`
  padding: 12px 20px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 38px;
  gap: 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.blue05};
  border-radius: 10px;

  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
`;

export const PlaceTextBox = styled.div<{ hasMemo: boolean }>`
  word-break: keep-all;

  div {
    display: flex;
    flex-direction: ${({ hasMemo }) => (hasMemo ? "row" : "column")};
    align-items: ${({ hasMemo }) => (hasMemo ? "flex-end" : "flex-start")};
    gap: ${({ hasMemo }) => (hasMemo ? "7px" : "0")};
  }
`;
export const PlaceNameParagraph = styled.p`
  line-height: 22px;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.black};
`;
export const PlaceThemeParagraph = styled.p`
  font-size: 11px;
  line-height: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.gray01};
`;
export const PlaceMemoParagraph = styled.p`
  font-size: 11px;
  line-height: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.main};
`;
