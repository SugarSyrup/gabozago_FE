import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 14px;

  display: flex;
  flex-direction: column;
  gap: 14px;

  span {
    margin-top: -14px;
  }
`;

export const Memo = styled.textarea`
  padding: 16px;
  width: 100%;
  height: 320px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray.quaternary};

  overflow: hidden;
  color: black;
  text-overflow: ellipsis;

  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 16px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: calc(100% - 40px);
  padding: 12px 20px;

  background-color: ${({ theme }) => theme.colors.blue.primary};
  border: none;
  border-radius: 10px;
`;
