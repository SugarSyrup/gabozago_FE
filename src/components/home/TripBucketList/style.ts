import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 12px;

  border: 1px solid ${({ theme }) => theme.colors.blue.primary};
  border-radius: 16px;

  display: flex;
  flex-direction: column;

  div:first-child {
    border-radius: 8px !important;
  }
`;

export const Item = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 9px;
`;

export const PlaceImg = styled.img`
  width: 64px;
  height: 64px;

  border-radius: 8px;
`;

export const PlaceDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Name = styled.span`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.048px;
`;

export const Address = styled.span`
  font-size: 12px;
  line-height: 16px;
`;

export const SeperateLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.tertiary};
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 0px;

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: ${({ theme }) => theme.colors.gray.secondary};
    }
  }
`;
