import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const BlogItem = styled.div`
  padding: 16px 0px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BlogInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

export const BlogTitle = styled.h4`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.blue.primary};
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const BlogContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;

  span {
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;

    color: ${({ theme }) => theme.colors.font.secondary};
    text-overflow: ellipsis;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
  }

  img {
    width: 100px;
    height: 100px;

    border-radius: 8px;
  }
`;

export const SeperateLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.tertiary};
`;
