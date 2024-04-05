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
    rgba(0, 0, 0, 0.3) 80%
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

export const ContentsContainer = styled.div`
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 60vh;
  background-color: blue;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  scroll-snap-type: x mandatory;
`;

export const Image = styled.img`
  height: inherit;
  flex: 0 0 100%;
  max-width: 100%;
  object-fit: cover;
  scroll-snap-align: start;
  border: 1px solid black;
`;

export const InfoContainer = styled.div`
  padding: 18px 20px 15px;
`;
