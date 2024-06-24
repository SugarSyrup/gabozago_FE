import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 8px;
  padding-right: 8px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Content = styled.span`
  color: ${({ theme }) => theme.black};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  white-space: pre-line;

  strong {
    font-weight: 600;
  }
`;
