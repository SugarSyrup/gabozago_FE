import styled, { css } from "styled-components";

const borderCSS = css`
  padding: 20px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.gray04};
`;

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ConfirmButtonsContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 500px;

  padding: 20px;
  display: flex;
  gap: 13px;
  background-color: ${({ theme }) => theme.white};
`;

export const ConfirmButton = styled.button<{
  styleTheme: "primary" | "secondary";
}>`
  padding: 12px;
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  border: 0;
  border-radius: 30px;

  ${({ styleTheme, theme }) =>
    styleTheme === "primary"
      ? css`
          font-weight: 300;
          color: ${theme.white};
          background-color: ${theme.main};
        `
      : css`
          font-weight: 400;
          color: ${theme.gray01};
          background-color: ${theme.gray05};
        `}
`;

export const NoticeContainer = styled(Container)``;

export const TitleHeading = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const DescParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.gray01};
  margin-bottom: 20px;

  strong {
    color: #424242;
    font-weight: 400;
  }
`;

export const InfoContainer = styled.div`
  ${borderCSS}

  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.black};

  ul.info {
    margin-bottom: 12px;
    padding-left: 20px;
    list-style-type: disc;
  }

  ul.checkboxs {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`;

export const InfoTitleParagraph = styled.p`
  margin-bottom: 6px;
  font-weight: 500;
`;

export const ReasonContainer = styled(Container)`
  margin-top: 26px;
`;

export const TitleParagraph = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  word-break: keep-all;

  span.required-text {
    margin-left: 4px;
    color: ${({ theme }) => theme.red};

    &::before {
      content: "*";
    }
  }
`;

export const SuggestContainer = styled(Container)`
  margin: 26px 0 50px;
`;

export const TitleDescParagraph = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;

  color: ${({ theme }) => theme.gray01};
`;

export const TextAreaContainer = styled.div`
  ${borderCSS}
  padding: 0;

  position: relative;
`;

export const TextArea = styled.textarea`
  padding: 20px;
  width: 100%;
  min-height: 200px;
  border: 0;

  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

export const TextCountParagraph = styled.p`
  padding: 12px 16px;
  position: absolute;
  bottom: 0;
  right: 0;

  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.gray01};
`;
