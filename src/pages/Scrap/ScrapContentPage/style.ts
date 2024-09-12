import styled from 'styled-components';

export const IconWrapper = styled.div`
  svg {
    width: 28px;
    height: 28px;
    cursor: pointer;

    path {
      fill: ${({ theme }) => theme.colors.gray.primary};
    }
  }
`;

export const ModalContainer = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    cursor: pointer;
    color: #262626;
  }
`;

export const ChangePopupContainer = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ChangePopupHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChangePopupInput = styled.input`
  width: 100%;
  height: 28px;

  color: ${({ theme }) => theme.gray};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  border: none;
  border-bottom: 1px solid #e4e4e4;
`;

export const FormButton = styled.button`
  border: none;
  background-color: inherit;

  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 14px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

export const Header = styled.div`
  width: 100%;
  padding: 16px 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  img {
    width: 64px;
    height: 64px;
    border-radius: 10px;
    border: 1px solid #e7e7e7;
  }
`;

export const NoThumbnail = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 10px;
  border: 1px solid #e7e7e7;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: ${({ theme }) => theme.colors.blue.primary};
    }

    path:nth-child(3) {
      fill: white;
    }
  }
`;

export const HeaderText = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  label {
    color: ${({ theme }) => theme.colors.font.tertiary};
  }
`;

export const HeaderIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  padding: 4px 4px;
  border-radius: 10px;
  background: #f6f6f6;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 20px;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const SeperateLine = styled.pre`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.quaternary};
`;

export const HeadlineContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MemoEdit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  color: ${({ theme }) => theme.colors.blue.primary};
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: ${({ theme }) => theme.colors.blue.primary};
    }
  }
`;

export const InstagramText = styled.div<{ isOpen: boolean }>`
  padding: 16px;
  border-radius: 16px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${({ theme }) => theme.colors.gray.quaternary};

  max-height: ${({ isOpen }) => (isOpen ? 'auto' : '320px')};
  overflow-y: ${({ isOpen }) => (isOpen ? 'auto' : 'hidden')};

  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`;

export const TextButton = styled.div`
  width: 100%;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: ${({ theme }) => theme.colors.gray.quaternary};

  padding: 10px 16px;
  color: ${({ theme }) => theme.colors.font.tertiary};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: ${({ theme }) => theme.colors.font.tertiary};
    }
  }
`;

export const MemoContainer = styled.div`
  width: 100%;
`;

export const MemoText = styled.div<{ isOpen: boolean }>`
  padding: 16px;
  border-radius: 16px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${({ theme }) => theme.colors.gray.quaternary};

  max-height: ${({ isOpen }) => (isOpen ? 'auto' : '160px')};
  overflow-y: ${({ isOpen }) => (isOpen ? 'auto' : 'hidden')};

  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`;

export const PlaceHeadlineWrapper = styled.div`
  margin-top: 12px;
`;

export const PlaceList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 8px;
`;

export const PlaceItem = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  img {
    width: 48px;
    height: 48px;
    padding: 4px;
    border-radius: 100%;
  }
`;

export const PlaceIconWrapper = styled.div<{ isScraped: boolean | undefined }>`
  position: absolute;
  right: 0px;

  svg {
    width: 32px;
    height: 32px;

    path{
      fill: ${({ isScraped, theme }) => {
        switch (isScraped) {
          case true: {
            return theme.colors.blue.primary;
          }
          case false: {
            return theme.colors.gray.primary;
          }
          default: {
            return theme.colors.gray.primary;
          }
        }
      }}
  }
`;

export const FontHighlight = styled.span`
  color: ${({ theme }) => theme.colors.blue.primary};
`;
