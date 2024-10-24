import styled from 'styled-components';

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 100%;
  position: relative;

  padding: 18px 16px;
`;

export const SearchIntroduceContainer = styled.div`
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    margin-left: -40px;
  }
`;

export const ListHeader = styled.div`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const FontHighlight = styled.span`
  color: ${({ theme }) => theme.colors.blue.primary};
`;

export const DataList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`;

export const Item = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 8px;
`;

export const LeftItems = styled.div`
  display: flex;
  gap: 12px;
`;

export const Thumbnail = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;

  background-color: ${({ theme }) => theme.gray04};
`;

export const Infomation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ExtraInfomation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

export const HighlightName = styled.span`
  color: ${({ theme }) => theme.main};
`;

export const ScrapWrapper = styled.div<{ isActive: boolean }>`
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;

    path {
      fill: ${({ isActive, theme }) =>
        isActive ? theme.colors.blue.primary : theme.colors.gray.secondary};
    }
  }
`;
