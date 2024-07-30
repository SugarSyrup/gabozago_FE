import styled, { keyframes } from 'styled-components';

export const CourseModalContainer = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;

  display: flex;
  flex-direction: column;
`;

// Modal Header

export const ScrapModalHeader = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const HeaderLeftItems = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const TravelThumbnailWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  flex-shrink: 0;

  border-radius: 100%;
  background-color: ${({ theme }) => theme.blue04};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 16px !important;
    height: 16px !important;
  }
`;

export const CourseModalHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ScrapIconWrapper = styled.div<{ isScraped: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 32px;
    height: 32px;
    path {
      fill: ${({ theme, isScraped }) => (isScraped ? theme.main : theme.gray01)};
    }
  }
`;

// Seperate Line
export const SeperateLine = styled.div`
  width: calc(100% + 40px);
  border-bottom: 1px solid #e4e4e4;
  margin-left: -20px;
`;

// TravelList Header
export const TravelListHeader = styled.div`
  width: 100%;
  padding: 10px 0;

  display: flex;
  justify-content: space-between;
`;

export const TravelCreate = styled.span`
  color: ${({ theme }) => theme.main};
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.2px;
  cursor: pointer;
`;

// TravelList
export const TravelList = styled.ol`
  max-height: 40dvh;
  width: 100%;
  padding-bottom: 10px;

  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
`;

export const TravelItem = styled.li`
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TravelInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const TravelInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;

export const TravelAddBtn = styled.div<{ isClicked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;

    path {
      fill: ${({ theme, isClicked }) => (isClicked ? theme.main : theme.gray01)};
    }
  }

  span {
    color: ${({ theme, isClicked }) => (isClicked ? theme.main : theme.gray01)};
    text-align: center;
    font-size: 8px;
  }
`;

export const CreateScrapFolderContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 14px;

  input {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.gray03};

    padding: 3px 0px;

    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`;

export const CreateScrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SaveText = styled.span`
  color: ${({ theme }) => theme.main};
`;

export const Header = styled.div`
  margin-bottom: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 12px;
  line-height: 22px;
  font-weight: 500;
`;

export const SaveButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: 0;
  font-size: 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.main};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.gray05};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 3px;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.gray04};

  font-size: 16px;
`;

export const CreateScrapFolder = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  left: 0;
  right: 0;
  bottom: 0;

  justify-content: center;
  align-items: center;

  overflow: hidden;
  z-index: 50;
`;
