import styled from "styled-components";

export const Header = styled.header`
  padding: 40px 20px 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 80%
  );

  svg {
    cursor: pointer;
    path {
      fill: ${({ theme }) => theme.white};
      stroke: ${({ theme }) => theme.white};
    }
  }
`;

export const IconButton = styled.button`
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100dvh - 88px);
  /* min-height: 100%; */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* padding-bottom: 80px; */
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding-top: var(--ytd-margin-6x);
  margin-top: var(--ytd-shorts-top-spacing);
  scrollbar-width: none;
  -ms-overflow-style: none;
  background-color: ${({ theme }) => theme.gray};
`;
