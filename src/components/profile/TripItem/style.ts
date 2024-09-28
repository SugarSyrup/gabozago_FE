import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  padding: 15px 10px;
  border-radius: 15px;
  background-color: #f6f6f6;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;

  position: relative;
`;

export const ThumbnailWrapper = styled.div`
  width: 68px;
  height: 68px;
  position: relative;

  flex-shrink: 0;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.gray03};

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

export const Info = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3px;
`;

export const Name = styled.span`
  font-size: 14px;
  font-weight: 600;

  margin-bottom: 3px;
  color: ${({ theme }) => theme.colors.font.primary};
`;

export const Desc = styled.span`
  color: ${({ theme }) => theme.colors.font.secondary};
  font-size: 10px;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: ${({ theme }) => theme.main};
    }
  }
`;

export const OptionWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 17px;

  svg path {
    fill: ${({ theme }) => theme.gray02};
  }
`;
