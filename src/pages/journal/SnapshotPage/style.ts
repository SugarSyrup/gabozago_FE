import styled from 'styled-components';

export const Header = styled.header`
  padding: 40px 20px 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;

  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.3) 80%);

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
  height: 60dvh;
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

export const ProfileBox = styled.div`
  display: flex;
  div {
    width: fit-content;
    p {
      text-decoration: none;
      color: ${({ theme }) => theme.black};
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    }
    p:nth-child(2) {
      margin-top: 2px;
      color: ${({ theme }) => theme.gray02};
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
    }
  }
`;
export const TopInfoBox = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const ProfileImage = styled.img`
  margin-right: 13px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ContentsBox = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  word-break: keep-all;

  p {
    word-break: keep-all;
    color: ${({ theme }) => theme.gray01};
    padding: 10px 0px 15px 45px;
  }
`;

export const BottomInfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 9px;
`;

export const InfoItem = styled.span`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.gray};

  svg {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
`;
