import styled from 'styled-components';

export const CheckPointList = styled.div`
  width: 100%;
  margin-bottom: 15px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.main};
  padding: 10px 20px 15px 20px;

  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const CheckPointItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 11px;

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;

    path {
      fill: ${({ theme }) => theme.main};
    }
  }
`;

export const CheckPointText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${({ theme }) => theme.black};
`;

export const CheckPoint = styled.span`
  color: ${({ theme }) => theme.black};
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
`;

export const CheckPointDesc = styled.span`
  color: #4e4e4e;
  font-size: 10px;
  font-weight: 400;
`;
