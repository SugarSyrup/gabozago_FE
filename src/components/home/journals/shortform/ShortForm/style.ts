import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100%;
  scroll-snap-align: start;
  margin-bottom: 10px;
`;

export const YoutubeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;

  overflow: hidden;
  border-radius: 10px;

  &::after {
    position: absolute;
    bottom: 0;
    content: "";
    display: block;
    width: 100%;
    height: 150px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.2) 30%,
      rgba(0, 0, 0, 0.5) 80%
    );
  }
`;

export const YoutubeFallback = styled.div`
  width: 100%;
  height: inherit;
  background-color: ${({ theme }) => theme.black};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const YoutubeIframe = styled.iframe`
  width: 100%;
  height: inherit;
`;

export const InfoBox = styled.div`
  padding: 17px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & > p:first-child {
    display: flex;
    align-items: center;
    gap: 10px;

    a {
      display: flex;
      align-items: center;
      gap: 6px;

      word-break: keep-all;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      color: ${({ theme }) => theme.white};

      svg {
        width: 30px;
        height: 30px;
        path {
          fill: ${({ theme }) => theme.white};
        }
      }
    }

    button {
      font-size: 9px;
      padding: 0 10px 0 6px;
      line-height: 20px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  & > p:nth-child(2) {
    padding-left: 2px;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    word-break: keep-all;
    color: ${({ theme }) => theme.white};
  }
`;

export const ContentBox = styled.p<{ isOpened: boolean }>`
  width: 100%;
  max-height: 30px;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 5px;
  background-color: transparent;

  ${({ isOpened }) =>
    isOpened &&
    css`
      display: block;
      max-height: 240px;
      overflow-y: auto;
      text-overflow: clip;
      background-color: #00000050;
    `};

  &:hover {
    background-color: #00000050;
  }

  p {
    padding: ${({ isOpened }) => (isOpened ? "5px" : 0)};
    color: ${({ theme }) => theme.white};
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.25px;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }
`;

export const BottomInfoContainer = styled.div`
  display: flex;
  gap: 20px;

  font-size: 13px;
  color: ${({ theme }) => theme.white};

  span {
    display: flex;
    align-items: center;
    line-height: 23px;
  }

  svg {
    width: 16px;
    height: 16px;
    margin-right: 6px;
    path {
      fill: ${({ theme }) => theme.white};
    }
  }
`;

export const ProfileImage = styled.image`
  width: 24px;
  height: 24px;
  object-fit: cover;
`;

export const FollowButton = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.main};
  color: white;
`;

export const ControlBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 17px 20px;
`;

export const IconButton = styled.button`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.white};
  border: 0;
  background: transparent;
  cursor: pointer;

  svg {
    margin-bottom: 6px;
    width: 30px;
    height: 30px;
  }

  &:not(:first-child) {
    margin-top: 20px;
    svg path {
      fill: ${({ theme }) => theme.white};
    }
  }

  /* &:first-child svg {
    path {
      stroke: ${({ theme }) => theme.gray02};
    }
  } */
`;
