import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  padding-top: 20px;

  position: absolute;
  top: 0px;
  left: 0px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 100%;
  position: relative;

  padding-left: 20px;
  padding-right: 20px;
`;

export const TabNavigation = styled.div`
  width: 100%;
  position: relative;
  //left: 0px;

  border-bottom: ${({ theme }) => `2px solid ${theme.gray04}`};

  display: flex;
  justify-content: space-between;

  padding: 10px 0px;
  margin-top: 10px;
`;

export const NavigationItem = styled.div<{ isHighlight: boolean }>`
  color: ${({ theme, isHighlight }) => (isHighlight ? theme.black : theme.gray01)};
  font-size: 14px;
  font-style: normal;
  font-weight: ${({ isHighlight }) => (isHighlight ? 700 : 500)};
  line-height: 22px;
  letter-spacing: 0.2px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  cursor: pointer;
  transition: color 0.2s ease-in-out;
`;

export const HighlightLine = styled.div<{ isHighlight: boolean }>`
  width: 50%;
  border-bottom: ${({ theme }) => `2px solid ${theme.main}`};

  position: absolute;
  left: ${({ isHighlight }) => (isHighlight ? '0px' : '50%')};
  bottom: -2px;

  transition: left 0.2s ease-in-out;
`;

export const Contents = styled.div`
  width: 100%;
  padding-top: 130px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0px;

  width: 100%;
  max-width: 500px;
  margin-left: -20px;
  padding: 15px 30px;

  background-color: ${({ theme }) => theme.gray07};
  border-top: ${({ theme }) => `1px solid ${theme.gray04}`};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ScrapContent = styled.div`
  width: 100%;
  padding-top: 100px;
`;
