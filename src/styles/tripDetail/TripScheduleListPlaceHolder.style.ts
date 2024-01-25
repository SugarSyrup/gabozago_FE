import styled from "styled-components";

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Item = styled.li`
  width: 100%;
  padding-left: 30px;
  position: relative;
  /* display: flex; */
  /* gap: 20px; */

  div {
    p {
      margin-bottom: 16px;
      font-size: 13px;
      font-weight: 600;
      line-height: 22px;
    }
    width: 100%;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    margin-top: 5px;
    width: 10px;
    height: 10px;
    border: 1.6px solid ${({ theme }) => theme.blue02};
    border-radius: 50%;
  }

  &:not(:last-child):after {
    content: "";
    display: block;
    position: absolute;
    left: 5px;
    top: 25px;
    width: 1.6px;
    height: 80%;
    background-color: ${({ theme }) => theme.blue02};
  }
`;
