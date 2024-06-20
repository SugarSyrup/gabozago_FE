import styled from 'styled-components';

export const SelectContainer = styled.div`
  max-height: 60dvh;
  overflow-y: auto;
`;

export const SubmitButtonContainer = styled.div`
  width: 100%;
  padding: 20px 30px;
`;

export const DateParagraph = styled.p`
  padding: 0 10px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Container = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 0;
  width: 100;
  max-width: 500px;
  padding: 0 20px;
  width: 100%;
  height: 76px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.main};
`;

export const Button = styled.button`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;

  font-size: 14px;
  font-weight: 500;
  line-height: 22px;

  cursor: pointer;
  border: 0;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.main};
`;
