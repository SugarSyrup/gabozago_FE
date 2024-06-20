import styled from 'styled-components';

export const List = styled.ol`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const Item = styled.div`
  width: 100%;

  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  border-bottom: 1px solid #eee;
`;

export const ThumbnailWrapper = styled.div`
  width: 68px;
  height: 68px;

  border-radius: 6px;
  background-color: #e4e4e4;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    path {
      fill: #a6a6a6;
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    object-fit: cover;
  }
`;

export const TextContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
`;

export const Name = styled.span`
  color: #121212;
  font-size: 16px;
  font-weight: 600;

  max-width: 200px;
  text-overflow: ellipsis;
`;

export const User = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;

  color: ${({ theme }) => theme.gray};

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: ${({ theme }) => theme.main};
    }
  }
  img {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: -2px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 5px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  span:nth-child(2) {
    svg {
      path {
        fill: #a6a6a6;
      }
    }
  }
`;
