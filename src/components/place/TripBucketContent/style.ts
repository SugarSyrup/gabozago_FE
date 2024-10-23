import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  margin-top: 10px;
  padding-bottom: 40px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

export const ContentList = styled.div`
  width: calc(100% + 20px);
  padding-left: 20px;
  margin-left: -20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentItem = styled.div`
  width: 100px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  position: relative;

  img {
    width: 100px;
    height: 100px;
    border-radius: 9px;
    object-fit: cover;
  }
`;

export const MemoContainer = styled.div`
  width: 100%;
`;

export const MemoHeadline = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
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

export const NoThumbnail = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 9px;
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

export const HeaderIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 60px;
  right: 8px;

  img {
    width: 24px;
    height: 24px;
  }
`;
