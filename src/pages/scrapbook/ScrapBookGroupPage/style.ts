import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.white};
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  padding: 40px 20px 20px;
  background-color: ${({ theme }) => theme.white};
`;

export const TabBarContainer = styled.div`
  margin-top: 10px;
  padding: 0 20px;
  position: relative;

  &::before {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.gray04};
  }
`;

export const FilterContainer = styled.div`
  width: 100%;
  padding: 15px 20px 0;
`;

export const HeadingContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 24px;
`;

export const BackButtonContainer = styled.button`
  position: absolute;
  top: 40px;
  left: 20px;
  background-color: transparent;
  padding: 0;
  border: 0;
  cursor: pointer;
`;

export const ContentsContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
`;

export const ArticleList = styled.ol`
  width: 100%;
  margin-top: -5px;
  flex: 100% 0 0;
  scroll-snap-align: start;

  li:hover h3 {
    text-decoration: underline;
  }
`;

export const ShortformContainer = styled.div`
  width: 100%;
  flex: 100% 0 0;
  scroll-snap-align: start;
`;
