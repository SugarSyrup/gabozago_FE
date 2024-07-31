import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 8px;
  padding-right: 8px;

  img {
    width: 100%;
    object-fit: contain;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Infomation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 16px 10px;
  background: ${({ theme }) => theme.blue05};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;

  color: ${({ theme }) => theme.black};
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;

  span {
    margin-left: -5px;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  svg:last-child {
    width: 16px;
    height: 16px;

    path {
      fill: #121212;
    }
  }
`;

export const Address = styled.span`
  margin-left: 32px;

  color: #444;
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 22px;

  div.icon {
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: ${({ theme }) => theme.colors.gray.secondary};
    }
  }

  span {
    color: ${({ theme }) => theme.colors.gray.secondary};
    text-align: center;
    font-size: 8px;
    white-space: nowrap;
  }
`;
