import styled from 'styled-components';

export const Container = styled.div``;

export const SearchWrapper = styled.div`
  padding: 10px 20px;
  background-color: white;
`;

export const LocationContainer = styled.div`
  display: grid;
  width: 100%;
  height: 400px;
  max-height: 80dvh;
  overflow-y: auto;
  grid-template-columns: 140px 1fr;
  grid-template-rows: 1fr;

  border-top: 1px solid ${({ theme }) => theme.gray04};
  border-bottom: 1px solid ${({ theme }) => theme.gray04};
`;

export const SearchedContainer = styled.div`
  margin-top: -28px;
  padding: 15px 20px;

  max-height: 300px;
  overflow-y: auto;
`;

export const CategoryList = styled.ul`
  height: 100%;
  overflow-y: auto;
  padding: 0;
  border-right: 1px solid ${({ theme }) => theme.gray03};
`;

export const CategoryItem = styled.li<{ active: boolean }>`
  padding: 8px;

  cursor: pointer;
  color: ${({ theme }) => theme.black};
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
  background-color: ${({ active, theme }) => (active ? theme.white : theme.gray06)};

  &:hover {
    background-color: ${({ theme }) => theme.white};
  }
`;

export const RegionList = styled.ul`
  height: 100%;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.white};
`;

export const RegionItem = styled.li<{ active: boolean }>`
  padding: 9px;

  cursor: pointer;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;

  color: ${({ active, theme }) => (active ? theme.main : theme.black)};

  background-color: ${({ active, theme }) => (active ? theme.blue05 : theme.white)};

  &:hover {
    background-color: ${({ theme }) => theme.blue05};
  }
`;

export const LocationTags = styled.div`
  max-height: 200px;
  width: 100%;
  padding: 15px 28px 10px;
  overflow-y: auto;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
