import styled, { css } from "styled-components";
import line from "../../../assets/icons/line.svg";

// const lineCss = css`
//   content: "";
//   flex-grow: 2;
//   display: block;
//   width: 1.6px;
//   background-image: url(${line});
//   background-repeat: repeat-y;
//   background-size: unset;
// `;

// export const PlaceItem = styled.li`
//   width: 100%;
//   display: grid;
//   grid-template-columns: min-content 1fr;
//   align-items: center;
//   gap: 10px;

//   &:not(:last-of-type) {
//     padding-bottom: 10px;

//     // 숫자마커 위, 아래 라인
//     & > div:first-of-type > div {
//       &::before,
//       &::after {
//         ${lineCss}
//       }
//     }
//   }
// `;

// export const MarkerBox = styled.div<{ color: string }>`
//   width: 18px;
//   height: 18px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 8px;

//   background-color: ${({ color }) => color};
//   border-radius: 50%;
//   line-height: 0;
// `;
// export const NumberSpan = styled.span`
//   margin: auto;
//   line-height: 0;

//   font-weight: 500;
//   font-size: 11px;
//   color: ${({ theme }) => theme.white};
// `;

export const TransportBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  font-size: 10px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.gray02};
  word-break: keep-all;

  p {
    margin: 3px 0;
    // 스크린리더 지원 텍스트
    span:first-of-type {
      visibility: hidden;
      position: absolute;
    }
    svg {
      margin-bottom: 2px;
    }
  }
`;
export const PlaceBox = styled.div`
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 20px;
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
