import styled from 'styled-components';

export const Card = styled.div<{ isUpcoming: boolean }>`
  width: 100%;
  height: 98px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${({ theme, isUpcoming }) => (isUpcoming ? '#D4DDFF' : theme.gray06)};

  position: relative;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 98px;

  cursor: pointer;
  padding: 15px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const ThumbnailWrapper = styled.div<{ isUpcoming: boolean }>`
  width: 68px;
  height: 68px;
  flex-shrink: 0;
  background-color: ${({ theme, isUpcoming }) =>
    isUpcoming ? theme.colors.blue.primary : theme.blue04};
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;

    path:last-child {
      fill: ${({ theme, isUpcoming }) => isUpcoming && theme.colors.blue.primary};
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Info = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;

    path {
      fill: ${({ theme }) => theme.main};
    }
  }
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 10;
  right: 15px;
  top: 15px;
`;
