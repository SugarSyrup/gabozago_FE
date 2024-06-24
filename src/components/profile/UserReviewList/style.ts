import styled from 'styled-components';

export const List = styled.ol`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const Item = styled.li`
  width: 100%;
  height: 100px;

  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #eee;
`;

export const ThumbnailWrapper = styled.div`
  width: 84px;
  height: 84px;

  border-radius: 6px;
  background-color: #e8e8e8;
`;

export const TextContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Name = styled.span`
  color: #121212;
  font-size: 16px;
  font-weight: 600;

  max-width: 200px;
  text-overflow: ellipsis;
`;

export const Desc = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.gray01};
  font-size: 11px;
  font-weight: 400;

  span {
    display: flex;
    align-items: center;
    gap: 4px;

    svg {
      width: 17px;
      height: 17px;
    }
  }
`;
