import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  span.main {
    color: ${({ theme }) => theme.main};
  }

  span.red {
    color: ${({ theme }) => theme.red};
  }
`;

export const InfomationText = styled.span`
  span {
    color: ${({ theme }) => theme.gray};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.gray};
  }

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const OperateTimeList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 8px;
`;

export const OperateTimeItem = styled.li`
  padding-top: 3px;
  padding-bottom: 3px;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;

  span {
    color: ${({ theme }) => theme.gray};
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
  }
`;
