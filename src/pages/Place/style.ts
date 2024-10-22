import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// PlaceHeader
export const PlaceHeaderContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const PlaceHeader = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  button {
    position: absolute;
    right: 0;

    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const ScrapButton = styled.div<{ isScraped: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  color: ${({ theme }) => theme.colors.font.secondary};

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: ${({ theme, isScraped }) =>
        isScraped ? theme.colors.blue.primary : theme.colors.font.tertiary};
    }
  }
`;

// BasicInformationContainer
export const BasicInformationContainer = styled.div``;

export const InfomationList = styled.ol`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfomationItem = styled.li`
  padding: 4px 20px;

  display: flex;
  justify-content: flex-start;
  gap: 20px;

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    path {
      fill: ${({ theme }) => theme.colors.gray.secondary};
    }
  }
`;

export const InfomationText = styled.span`
  color: ${({ theme }) => theme.colors.font.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const AddressOld = styled.span`
  color: ${({ theme }) => theme.colors.font.tertiary};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.028px;

  margin-right: 8px;
`;

export const SeperateLine = styled.div`
  width: calc(100% - 40px);
  margin-left: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.tertiary};
`;

export const PageSeperateLine = styled.div`
  width: 100%;
  border-bottom: 4px solid ${({ theme }) => theme.colors.gray.tertiary};
`;

// Map Buttons Container

export const MapButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MapButtons = styled.div`
  width: calc(100% - 60px);
  margin-left: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MapButton = styled.div`
  padding: 16px 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  img {
    width: 28px;
    height: 28px;
  }
`;

export const MapButtonSperateLine = styled.div`
  height: 32px;
  width: 0px;

  border-right: 1px solid ${({ theme }) => theme.colors.gray.tertiary};
`;

export const PlaceAddButton = styled.div`
  width: calc(100% - 40px);
  margin-left: 20px;
  padding: 12px 20px;

  border: 1px solid ${({ theme }) => theme.colors.blue.primary};
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  svg {
    width: 28px;
    height: 28px;
    path {
      fill: ${({ theme }) => theme.colors.blue.primary};
    }
  }
`;

export const InfomationLink = styled(Link)`
  color: ${({ theme }) => theme.main};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-decoration-line: underline;
`;

export const MemoContainer = styled.div`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export const MemoDataList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MemoItem = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;

  h3 {
    flex-shrink: 0;
  }
`;

export const MemoLink = styled.a`
  color: ${({ theme }) => theme.colors.blue.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.3px;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const Memo = styled.span`
  color: ${({ theme }) => theme.colors.font.tertiary};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.3px;
`;

export const MemoHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: ${({ theme }) => theme.colors.blue.primary};
    }
  }
`;

export const ExtraInfomationContainer = styled.div`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ExtraInfomation = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ExtraInfomationItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.font.secondary};

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const UpButton = styled.div`
  margin-top: 8px;

  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;

  border-radius: 36px;
  border: 1px solid ${({ theme }) => theme.colors.gray.tertiary};
  background: #fff;

  cursor: pointer;
`;
