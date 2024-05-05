import styled, { css } from "styled-components";

export const List = styled.ol`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0;
  bottom: 0;
  margin-top: 20px;
  overflow-y: auto;

  li {
    padding: 10px 20px;
    border-bottom: 1px solid ${({ theme }) => theme.gray04};

    p {
      margin-bottom: 6px;
      width: 100%;

      word-break: keep-all;
      overflow-wrap: anywhere;

      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.15px;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: end;
    }
  }
`;

export const NoDataParagraph = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  word-break: keep-all;

  color: ${({ theme }) => theme.gray02};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const StatusSpan = styled.span<{ type: "active" | "inactive" }>`
  width: fit-content;
  padding: 5px 11px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.5px;

  ${({ type }) =>
    type === "active"
      ? css`
          color: ${({ theme }) => theme.main};
          background: ${({ theme }) => theme.blue05};
        `
      : css`
          color: ${({ theme }) => theme.gray02};
          background: ${({ theme }) => theme.gray05};
        `}
`;

export const DateSpan = styled.span`
  color: ${({ theme }) => theme.gray02};

  /* Label/Label Medium */
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.5px;
`;
