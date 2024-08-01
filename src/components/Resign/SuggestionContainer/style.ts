import styled, { css } from 'styled-components';
import { Container } from '../../../pages/Profile/Resign/ResignPage/style';

const borderCSS = css`
  padding: 20px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.gray04};
`;

export const SuggestContainer = styled(Container)`
  margin: 26px 0 50px;
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
      content: '*';
    }
  }
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

  font-size: 16px;
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
