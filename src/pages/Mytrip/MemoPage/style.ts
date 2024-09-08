import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 500px;

  margin-left: -20px;
  padding: 15px 10px;

  position: fixed;
  bottom: 0;
`;

export const Header = styled.header`
  width: 100%;
  padding: 15px 20px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;

  svg {
    width: 28px;
    height: 28px;

    path {
      fill: ${({ theme }) => theme.colors.gray.primary};
    }
  }
`;

export const PlaceInfoContainer = styled.div`
  width: 100%;
`;

export const PlaceInfoBottomBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const MemoTextArea = styled.textarea`
  padding: 15px;
  margin-top: 6px;

  min-height: 550px;

  width: 100%;
  font-size: 16px;
  border-radius: 10px;
  border: 0;
  background-color: ${({ theme }) => theme.gray05};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray.secondary};

    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
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
