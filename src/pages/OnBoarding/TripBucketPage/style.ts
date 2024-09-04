import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;
  overflow-x: scroll;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }

  img {
    flex-shrink: 0;
    width: 100%;
  }
`;

export const IndexDots = styled.div`
  position: fixed;
  bottom: 80px;
  left: calc(50% - 45px);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const HightlightDot = styled.div`
  svg {
    circle {
      fill: ${({ theme }) => theme.colors.blue.primary};
    }
  }
`;

export const NavContainer = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.blue.primary};

  position: fixed;
  bottom: 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavButton = styled.div`
  width: 100%;
  padding: 12px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
