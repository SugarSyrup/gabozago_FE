import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 8px;

  svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    cursor: pointer;

    path {
      fill: ${({ theme }) => theme.colors.gray.secondary};
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Desc = styled.span`
  color: ${({ theme }) => theme.colors.font.primary};
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
`;
