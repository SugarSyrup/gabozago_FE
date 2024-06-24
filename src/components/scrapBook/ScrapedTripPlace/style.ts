import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PlaceList = styled.ol<{ marginTop: string }>`
  margin-top: ${({ marginTop }) => marginTop};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PlaceItem = styled.li`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: nowrap;
  gap: 10px;

  & > div:first-child {
    display: flex;
    gap: 10px;
  }
`;

export const BookMarkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 0;

  background-color: transparent;
  border: 0;

  svg {
    fill: ${({ theme }) => theme.main};
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.black};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const PlaceInfoBox = styled.div`
  flex: 1 1 auto;
  max-width: 100%;
`;

export const TopInfoBox = styled.div`
  width: 100%;
  margin-bottom: 7px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const PlaceNameSpan = styled.span`
  word-break: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.2%;
  line-height: 18px;

  /* text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical; */
`;

export const PlaceThemeSpan = styled.span`
  font-size: 12px;
  word-break: keep-all;
  color: ${({ theme }) => theme.gray01};
`;

export const AddressParagraph = styled.p`
  width: 100%;
  margin-bottom: 12px;
  font-size: 12px;
  word-break: keep-all;
  color: ${({ theme }) => theme.gray01};
`;

export const DetailViewButton = styled.button`
  flex-shrink: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;
  color: ${({ theme }) => theme.main};
  background-color: transparent;

  label {
    cursor: pointer;
  }
  svg {
    width: 16px;
    height: 16px;

    path {
      fill: ${({ theme }) => theme.main};
    }
  }

  &:hover {
    text-decoration: underline;
  }
`;
