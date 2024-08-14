import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  padding: 15px 20px;

  svg {
    position: absolute;
    left: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 40px;
`;

export const InputList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 18px 0px;

  border: none;
  border-bottom: 1px solid #d9d9d9;

  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  width: calc(100% - 40px);
  max-width: calc(500px - 40px);
  padding: 15px;

  position: fixed;
  bottom: 0;
`;

export const Button = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: 12px 20px;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: white;
  background-color: ${({ isActive, theme }) => (isActive ? theme.main : '#A6A6A6')};
  cursor: pointer;
  border: none;

  svg {
    width: 28px;
    height: 28px;
    path {
      fill: white;
    }
  }
`;

export const LinkTypo = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-decoration-line: underline;
`;
