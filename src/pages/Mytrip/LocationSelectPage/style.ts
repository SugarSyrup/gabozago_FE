import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 100%;
  position: relative;
  padding-top: 15px;
  padding-bottom: 10px;
`;

export const LocationsHeader = styled.div`
  margin-bottom: 20px;
`;

export const Locations = styled.div`
  width: 100%;
  padding-bottom: 160px;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Footer = styled.footer`
  position: fixed;
  max-width: 500px;
  bottom: 0px;

  padding: 15px 8px;
  margin-left: -20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  padding-left: 25px;
  padding-right: 25px;

  width: 100%;
  overflow: auto;
  background-color: white;
`;

export const LocationTags = styled.div`
  width: 100%;
  max-height: 88px;
  overflow: auto;
  //ios scroll issue? 해결 가능 할지 테스트
  -webkit-overflow-scrolling: touch;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SubmitButtonText = styled.span`
  color: white;
`;

export const LocationItem = styled.li`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LocationInfomation = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LocationImgWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.blue04};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 100%;
  }
`;

export const LocationSelectButton = styled.button<{ isActive: boolean }>`
  padding: 4px 15px;

  border: none;
  border-radius: 20px;
  background-color: ${({ theme, isActive }) => (isActive ? theme.main : theme.gray06)};
  color: ${({ theme, isActive }) => (isActive ? theme.white : theme.black)};

  cursor: pointer;
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
