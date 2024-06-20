import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;
  word-break: keep-all;
`;

export const InfoContainer = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.gray04};

  display: flex;
  flex-direction: column;
  gap: 5px;

  p.title {
    color: ${({ theme }) => theme.black};
  }

  p.date {
    color: ${({ theme }) => theme.gray01};
  }
`;

export const ContentsContainer = styled.div`
  padding: 25px 18px;

  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
`;
