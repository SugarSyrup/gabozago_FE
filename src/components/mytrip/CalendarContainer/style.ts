import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  height: 70dvh;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0px;
  margin-left: -20px;
  z-index: 2;

  /* height: 200px; */

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;

  padding: 15px 30px;
  padding-bottom: 40px;

  width: 100%;
  max-width: 500px;
  overflow: auto;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 50%);
`;

export const Button = styled.button<{
  bgColor: boolean;
}>`
  width: 100%;
  padding: 12px 20px;
  border-radius: 30px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: ${({ theme, bgColor }) => (bgColor ? theme.main : '#a6a6a6')};
  text-decoration: none;
  cursor: pointer;
  svg {
    width: 28px;
    height: 28px;

    path {
      fill: white;
    }
  }
`;
