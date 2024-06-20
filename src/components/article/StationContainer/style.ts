import styled from 'styled-components';

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${({ isOpen }) => (isOpen ? 100 : -10)};

  margin: auto;
  max-width: 500px;
  max-height: 100dvh;
  width: 100%;
  height: 100dvh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const StationList = styled.ol<{ isBackground: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: calc(100% - 40px);
  padding: 12px 20px;
  background-color: ${({ isBackground, theme }) => (isBackground ? theme.blue05 : 'white')};
  border-radius: 6px;
  margin-left: 20px;
`;

export const StationItem = styled.li`
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

export const Linker = styled.div<{
  isFirst?: boolean;
  isLast?: boolean;
}>`
  height: 55px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &::before {
    content: '';
    width: 1px;
    height: 12px;
    ${({ isFirst }) => !isFirst && 'border-right:2px solid #849FFF'};
  }

  &::after {
    content: '';
    width: 1px;
    height: 26px;
    ${({ isLast }) => !isLast && 'border-right:2px solid #849FFF'};
  }
`;

export const TextContainer = styled.a<{
  isLast?: boolean;
}>`
  width: 100%;
  height: 54px;

  padding-top: 12px;
  padding-bottom: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  text-decoration: none;

  border-bottom: ${({ theme, isLast }) => !isLast && `1px solid ${theme.gray03}`};
  cursor: pointer;
`;

export const StationNumber = styled.span`
  color: ${({ theme }) => theme.gray};
  font-size: 12px;
  font-weight: 600;
`;

export const StationName = styled.span`
  color: ${({ theme }) => theme.gray};
  font-size: 12px;
  font-weight: 400;
`;

export const StationIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;

  background-color: white;
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25));

  position: fixed;
  margin-left: 20px;
  bottom: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ModalTitle = styled.span`
  margin-left: 20px;
  color: ${({ theme }) => theme.gray};

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
`;
