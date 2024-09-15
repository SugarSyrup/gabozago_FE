import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeaderName = styled.div``;

export const ImgSlider = styled.div`
  width: 100%;
  max-height: 200px;
  overflow: auto;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  scroll-snap-type: x mandatory;

  img {
    width: 100%;
    max-height: 200px;
    scroll-snap-align: start;
    object-fit: cover;
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const PlaceTitle = styled.div`
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

  color: ${({ theme, isScraped }) => (isScraped ? 'white' : theme.colors.font.tertiary)};

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: ${({ theme, isScraped }) => (isScraped ? 'white' : theme.colors.font.tertiary)};
    }
  }
`;

// ContentList
export const ContentList = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`;

export const InfomationList = styled.ol`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfomationItem = styled.li`
  padding-top: 4px;
  padding-bottom: 4px;

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
`;

export const InfomationLink = styled(Link)`
  color: ${({ theme }) => theme.main};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-decoration-line: underline;
`;

export const SeperateLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.tertiary};
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

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  svg {
    width: 28px;
    height: 28px;

    path {
      fill: white;
    }
  }
`;
