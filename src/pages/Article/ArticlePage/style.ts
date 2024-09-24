import styled from 'styled-components';

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 500px;
  height: 100%;
  z-index: ${({ isOpen }) => (isOpen ? 100 : -1)};

  margin-left: -20px;
`;

export const BackButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;

  svg {
    width: 30px;
    height: 30px;

    path {
      fill: white;
    }
  }
`;

export const ThumbnailWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background-color: white;

  padding-bottom: 80px;

  img {
    width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;
`;

export const Type = styled.span`
  color: ${({ theme }) => theme.gray02};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.black};
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
`;

export const StationContainer = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const StationTitle = styled.span`
  color: ${({ theme }) => theme.gray};
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
  margin-left: 20px;
`;

export const NextArticle = styled.div`
  width: 100%;
  padding: 5px 20px;
  background-color: ${({ theme }) => theme.blue05};
  border-radius: 6px;

  span {
    color: ${({ theme }) => theme.gray};
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
  }

  a {
    color: ${({ theme }) => theme.gray};
  }
`;

export const Content = styled.div<{ isLogin: boolean }>`
  max-height: ${({ isLogin }) => !isLogin && '2390px'};
  overflow-y: hidden;
  margin-top: 70px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;

  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
`;

export const Empty = styled.div`
  padding-bottom: 160px;
`;

export const IsLoginBlur = styled.div<{ top: number }>`
  width: 100%;
  height: 772px;
  padding-top: 50px;
  padding-left: 30px;
  padding-right: 30px;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #1f1e1e 100%);
  backdrop-filter: blur(4px);

  position: absolute;
  left: 0px;
  bottom: 0px;
  top: ${({ top }) => `${top * 54 + 2390 + 24 + 34}px`};
  z-index: 500;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;
  color: white;

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const LoginLinkButton = styled.div`
  width: 100%;
  padding: 10px 20px 15px 20px;
  background-color: ${({ theme }) => theme.main};
  border-radius: 30px;
  margin-top: 20px;
  cursor: pointer;
`;

export const ClosingContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray.tertiary};
  padding-top: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

export const ClosingHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.blue.primary};
`;

export const ClosingContent = styled.span`
  padding-left: 8px;
  padding-right: 8px;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
`;
