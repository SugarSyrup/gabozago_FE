import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfomationItem = styled.li`
  padding: 4px 20px;

  display: flex;
  justify-content: flex-start;
  gap: 20px;

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    path {
      fill: ${({ theme }) => theme.colors.gray.secondary};
    }
  }
`;

export const InfomationText = styled.span`
  color: ${({ theme }) => theme.colors.font.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const InfomationLink = styled(Link)`
  color: ${({ theme }) => theme.main};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-decoration-line: underline;
`;

export const AmenitiesAndServiceList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;

  padding-left: 4px;
`;

export const AmenitiesAndServiceItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;
