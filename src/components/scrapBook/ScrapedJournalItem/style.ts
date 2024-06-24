import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const JournalItem = styled.li`
  padding: 16px 0 11px;
  border-bottom: 1px solid ${({ theme }) => theme.gray04};
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;

  &:hover {
    p:first-of-type {
      text-decoration: underline;
    }
  }
`;

export const InfoBox = styled.div`
  display: grid;
  grid-template-columns: max-content;
`;

export const JournalTitle = styled.p`
  margin-bottom: 24px;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.black};
`;

export const BottomInfoList = styled.ol`
  text-align: left;
`;

const BottomInfoItem = styled.li`
  font-size: 11px;
  color: ${({ theme }) => theme.gray01};

  svg {
    width: 17px;

    path {
      fill: ${({ theme }) => theme.gray01};
    }

    &.clap {
      width: 20px;
      margin-right: 3px;
      path:first-of-type,
      path:nth-of-type(3) {
        fill: ${({ theme }) => theme.white};
      }
    }
  }
`;

export const BottomInfoItemTop = styled(BottomInfoItem)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 5px;
`;
export const BottomInfoItemBottom = styled(BottomInfoItem)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;

  div {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 3px;
  }
`;

export const HiddenInfoTitle = styled.span`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
`;

export const ThumbnailImage = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 6px;

  object-fit: cover;
`;

export const ThumbnailImagePlaceHolder = styled(ThumbnailImage)`
  background-color: ${({ theme }) => theme.gray04};
  object-fit: none;
`;
