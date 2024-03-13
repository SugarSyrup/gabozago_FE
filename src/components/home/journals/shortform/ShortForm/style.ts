import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  transform: translateY(0);
  transition: transform ease-in-out 0.3s;
  height: 100%;
`;

export const InfoBox = styled.div`
  padding: 17px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 11px;

  p:first-child {
    display: flex;
    align-items: center;
    gap: 10px;

    a {
      display: flex;
      align-items: center;
      gap: 6px;

      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      color: ${({ theme }) => theme.white};

      svg {
        width: 30px;
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
  p:nth-child(2) {
    padding-left: 2px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.white};
  }
  p:nth-child(3) {
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

export const YoutubeContainer = styled.div`
  width: 100%;
  height: inherit;
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
