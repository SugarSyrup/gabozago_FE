import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilterContainer = styled.div``;

export const PlaceList = styled.ol`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
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

export const Button = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive, theme }) => isActive && theme.main};
  color: ${({ theme, isActive }) => isActive && theme.white};

  padding: 4px 15px;
  border: none;
  border-radius: 20px;

  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
