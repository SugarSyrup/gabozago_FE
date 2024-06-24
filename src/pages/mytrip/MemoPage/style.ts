import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  padding: 30px;
`;

export const PlaceInfoContainer = styled.div`
  width: calc(100% - 24px);
  padding-left: 15px;
  margin-left: 24px;
`;

export const PlaceInfoBottomBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const MemoTextArea = styled.textarea`
  padding: 15px;
  min-height: 260px;
  width: 100%;
  font-size: 16px;
  border-radius: 10px;
  border: 0;
  background-color: ${({ theme }) => theme.gray05};
`;
export const TextCountParagraph = styled.p`
  margin-top: 5px;
  text-align: right;
  color: ${({ theme }) => theme.gray02};

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
`;
