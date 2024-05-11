import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.gray07};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 26px 0 50px;
`;

export const TitleParagraph = styled.p`
  word-break: keep-all;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;
export const TitleDescParagraph = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;

  color: ${({ theme }) => theme.gray01};
`;

export const TextArea = styled.textarea`
  padding: 20px;
  width: 100%;
  min-height: 350px;
  border: 1px solid ${({ theme }) => theme.gray04};
  border-radius: 4px;

  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

export const TextCountParagraph = styled.p`
  text-align: right;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.gray02};
`;
